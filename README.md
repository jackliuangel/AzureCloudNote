# CloudNote

#VPN via Azure
https://www.youtube.com/watch?v=dqM3t4rVNmE&list=LLP6ZUDHzmYmGnzMNdU32uhg&t=682s&index=6

#VPN via Google Cloud
https://www.youtube.com/watch?v=xrbviAfagrU&t=463s


=======Azure
Kubenetes quick start:
https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough

如何本地创建image，push到azure的contianer registry，以及如何确认上传成功
https://docs.microsoft.com/zh-tw/azure/container-instances/container-instances-tutorial-prepare-acr

Deploy kubernetes service
sample: az container create --resource-group myResourceGroup --name aci-tutorial-app --image acrjack.azurecr.io/aci-tutorial-app:v1 --cpu 1 --memory 1 --registry-login-server acrjack.azurecr.io --registry-username acrJack --registry-password sqOvq=qbExvEmqF9FiNpnikB4HrIsRF3 --dns-name-label aci-demo --ports 80


Demo--2018/7/24

Docker file understanding
Redis 

Nginx
softlink 
  sites-available<-->sites-enabled, /etc/init.d/nginx -s reload; -t test
Soft routing
  (note: rewrite with /)
Content caching 
  grammar understanding: http://nginx.org/en/docs/http/ngx_http_core_module.html#location


Ab performance testing (ApacheBench)
  sample: ab -c 40 -n 100 http://137.117.106.57:8080/

