<p align="center">

  <a href="https://github.com/parzh/create-package-javascript">
    <img src="https://badge.fury.io/gh/parzh%2Fcreate-package-javascript.svg">
  </a>

  <a href="https://www.npmjs.com/package/create-package-javascript">
    <img src="https://badge.fury.io/js/create-package-javascript.svg">
  </a>

</p>

<h1 align="center"><pre>npm init package-javascript <<i>name</i>></pre></h1>
<p align="center">Recklessly create npm packages left and right with this single command ☝</p>

## Usage

<pre align="center">
npm init package-javascript <<i>name</i>> [--in <<i>path</i>>]
</pre>

**`create-package-javascript`** was designed with <code>npm init &hellip;</code> approach in mind ([learn more](https://docs.npmjs.com/cli/init) about `npm init`).

```sh
npm init package-javascript my-package
npm init package-javascript my-foo-package --in ./path/to/my-packages/foo
```

### `--in`

By default, all the files are put to a new directory named after the package name:

```sh
cd ~
npm init package-javascript my-package
```

```yml
~/
  my-package/
    package.json # "name": "my-package"
```

This behavior can be overriden with `--in` option. For example, this command:

```sh
cd ~
npm init package-javascript my-foo-package --in ./path/to/my-packages/foo
```

&hellip; creates these files:

```yml
~/path/to/my-packages/
  foo/
    package.json # "name": "my-foo-package"
```

### Different versions

By default, the **`create-package-javascript@latest`** is used. To use different version of **`create-package-javascript`**, consider this syntax:

<pre align="center">
npm init package-javascript@<<i>version</i>> <&hellip;<i>options</i>>
</pre>
