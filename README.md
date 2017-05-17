Flask React
===========

Updated boilerplate project for using flask and react together.

Uses:
- webpack
- babel (es2015)
- npm
- virtualenv

## Getting Started:

```
npm install
virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
```

If you are running on windows, you will want to run `venv/Scripts/activate.bat` instead of `source venv/bin/activate`.

You will need to run `npm build` and `python app` in seperate windows as `npm build` needs to run along side the python app. The npm script will continuously watch the javascript files and re-compile on changes.

### TODO:

- css compiling with webpack
