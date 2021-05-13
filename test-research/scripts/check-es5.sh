./node_modules/.bin/es-check --module es5 .next/static/**/*.js || sh -c "
echo '
# # # # # # # # # # # # # # # # # # # # # # # # # #

You may want to add a module to next.config.js#withTranspileModules
Please refer to steps at:
https://loftbr.atlassian.net/wiki/spaces/FG/pages/662274170/Checking+for+ES5+compliant+dependencies

# # # # # # # # # # # # # # # # # # # # # # # # # #
' && \
exit 1
"
