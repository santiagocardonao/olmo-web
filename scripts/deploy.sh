#!/usr/bin/env bash
# Publica el sitio en olmo.agency (SiteGround, por SSH).
# Uso: bash scripts/deploy.sh
# Credenciales en sitio/.env.deploy (no se sube a git): SG_USER, SG_HOST, SG_PORT, SG_KEY.
set -e
cd "$(dirname "$0")/.."
[ -f .env.deploy ] && . ./.env.deploy
: "${SG_USER:?Falta SG_USER en sitio/.env.deploy}"
: "${SG_HOST:?Falta SG_HOST en sitio/.env.deploy}"
DEST="www/olmo.agency/public_html/"
case "$DEST" in
  www/olmo.agency/public_html/) ;;
  *) echo "Destino no permitido: $DEST" >&2; exit 1 ;;
esac
SITE_URL=https://olmo.agency PUBLIC_NOINDEX=false npm run build
# .well-known lo usa SiteGround para el certificado SSL: no se toca.
rsync -avz --delete --exclude='.well-known' \
  -e "ssh -i ${SG_KEY:-$HOME/.ssh/siteground_olmo} -o IdentitiesOnly=yes -p ${SG_PORT:-18765}" \
  dist/ "$SG_USER@$SG_HOST:$DEST"
