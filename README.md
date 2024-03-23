# Deprecated

Go to https://github.com/paretoman/votekit instead. It's a simpler workflow.

Everything below is still here just as a backup.

# See

The site is live and in production mode at http://www.howtofixtheelection.com/votekit-example/


# Develop

Include `--recursive` when cloning because we have submodules.
```
git clone https://github.com/paretoman/votekit-example-src.git --recursive
```

If you already cloned this without `--recursive`, you just get empty submodules. To fix this, run
```
git submodule update --init
```
Go to the command line inside the `votekit-example-src` folder.

Do `npm install`. This gets Parcel installed, which allows you to build the site.

Do `scripts/build.bat`. This builds the site.

# Publish

You'll have to change the remote repo for the submodule `_site` in order to publish to your own github pages. Basically, go to github to make a new repo. There are instructions there for adding a remote, after you finish deciding on a repo name (the hardest part).
