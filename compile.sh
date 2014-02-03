#!/bin/bash

jade index.jade
lessc stylesheets/style.less > stylesheets/style.css && echo "  compiled style.css"
