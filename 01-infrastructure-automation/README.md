# Demo 01: Infrastructure Automation

create new charts:

    helm create webserver

explore chart and install it:

    helm install webserver

show generated code:

    helm template webserver

Show conditional stuff in template, upgrade the release using different values:

    helm upgrade -f values-override.yaml <Release> webserver

Afterwards show in browser http://nginx.local/

Show history with:

    helm history <Release>

Rollback to other revision

    helm rollback <Release> <Revision>