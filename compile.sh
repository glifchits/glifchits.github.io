#!/bin/bash

jade -P index.jade
lessc stylesheets/style.less > stylesheets/style.css && echo "  compiled style.css"
