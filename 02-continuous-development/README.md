# Demo 02: Continuous Development

go into `02-continuous-development/rest-api`

    draft create

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