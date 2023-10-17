default: serve
h help:
	@grep '^[a-z]' Makefile
s serve:
	jekyll serve