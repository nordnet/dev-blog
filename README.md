# Nordnet Dev Blog


## Usage

### Create post
Run the followin command and fill out the prompted meta data.
```sh
yarn post
```
#### Meta fields
Field         | Type                 | Note
--------------|----------------------|-----------
`title`       | `string`             | Title of the blogpost (you should not put the title as a header in the blogpost). Maxlength: 60.
`description` | `string`             | Description of the blogpost, this is used for `og:description` and `meta=description` in `<head>` for SEO. Maxlength: 200.
`author`      | `string`             | The author of the post, pick from a list of previous found authors, or choose other to manually create a new author. Maxlength: 32.
`date`        | `"yyyy-MM-dd"`       | The publish date of the post, take note for format. The date will be validated, also remember to put quotes to explicit make it a string for parseability. Defaults to current date.
`category`    | `string`             | Pick a category that is already available or create a new one. Maxlength: 32.
`tags`        | `string[]`           | Pick tags that is already available and/or create new ones but typing a comma separated list when prompted. Maxlength: 10 items and 32 chars/item.
`image`       | `relative file path` | Select an image from `/public/images` (`None`/`null` is allowed in creation but not when validating). This is used by `og:image` and as a thumbnail/hero image. TODO: Recommend/enforce aspect ratio(s).
`readTime`    | `number`             | Indicator in minutes how long the post takes to read. Calculated by counting words in post and dividing by 265 words/minute. (Only generated when running `yarn update:meta`). Range: 0-60.
(`slug`)      | `string`             | (Not actually in the metadata) Filename of where to save the file relative to `/posts`. This will also be the url of the post. Must be kebab-case (lower case with dashes) with '/' as directory separator (subdirectories are allowed). Defaults to `kebabCase(title)`. Total maxlength: 64.

### Modify meta data
```
yarn update:meta
```

Option        | Default | Note
--------------|---------|---------
`files`       | `null`  | Multi select (with autocompletion) to choose which files to update.
`bulk`        | `false` | If `true` the cli will prompt for meta data once per field and write it to all selected files. If `false` the cli will prompt for input for each relevant field for every selected file.
`forceUpdate` | `false` | If `false` the cli will only prompt/update missing fields. If `true` it will prompt for updates even for fields already set (with current state as default).


## Development
```sh
yarn install
yarn dev
```


## TODOs and Inspiration
* [https://www.netlify.com/blog/2020/05/08/improve-your-seo-and-social-sharing-cards-with-next.js/](https://www.netlify.com/blog/2020/05/08/improve-your-seo-and-social-sharing-cards-with-next.js/)
* [https://www.learnwithjason.dev/blog/auto-generate-social-image/](https://www.learnwithjason.dev/blog/auto-generate-social-image/)
* [https://cloudinary.com/products/programmable_media](https://cloudinary.com/products/programmable_media)