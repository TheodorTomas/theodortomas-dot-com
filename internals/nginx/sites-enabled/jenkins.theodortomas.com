server {
	listen 80;
	listen [::]:80;
	access_log /var/log/nginx/jenkins.access.log;
  error_log /var/log/nginx/jenkins.error.log;

	root /var/lib/jenkins/workspace/theodortomas.com/build;

	index index.html index.htm;

	server_name jenkins.theodortomas.com;

	location / {
		include /etc/nginx/proxy_params;
    proxy_pass          http://localhost:8080;
    proxy_read_timeout  90s;
    # Fix potential "It appears that your reverse proxy set up is broken" error.
    proxy_redirect      http://localhost:8080 https://jenkins.theodortomas.com;
	}

  listen 443 ssl; # managed by Certbot
  ssl_certificate /etc/letsencrypt/live/theodortomas.com/fullchain.pem; # managed by Certbot
  ssl_certificate_key /etc/letsencrypt/live/theodortomas.com/privkey.pem; # managed by Certbot
  include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
  ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

  if ($scheme != "https") {
    return 301 https://$host$request_uri;
  } # managed by Certbot
}
