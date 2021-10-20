

### `ZButton` props

| Attribute |    Type    |  Default  | Description                                                                                              |
| :-------- | :--------: | :-------: | :------------------------------------------------------------------------------------------------------- |
| type      |  `string`  | `primary` | Render a specific button type, styled by the .scss type list                                             |
| size      |  `string`  |  `auto`   | Render a specific button size, styled by the .scss size list                                             |
| element   |   `node`   |  `null`   | Overwrites the default container element renderer, useful for using it with react-router Link component. |
| disabled  |   `bool`   |  `false`  | Should render a disabled button                                                                          |
| visible   |   `bool`   |  `true`   | Should the button be visible                                                                             |
| ripple    |   `bool`   |  `false`  | Should render the animated ripple effect                                                                 |
| onPress   | `function` |  `null`   | Default click/press function                                                                             |
| href      |  `string`  |  `null`   | Forces the button to be rendered on an `anchor` container and sets the href to the specified value       |
| target    |  `string`  |  `null`   | When used together with `href` renders an anchor with a specific target attribute                        |



### `ZButtonProgress` specific props

Being a wrapper on the **`ZButton`** component, it accepts its props plus the following ones.

| Attribute    |   Type    |  Default  | Description                                                 |
| :----------- | :-------: | :-------: | :---------------------------------------------------------- |
| loadingLabel | `string`  | `Wait ..` | Progress button loading label text                          |
| resultLabel  | `string`  | `Success` | Progress button success label text                          |
| releaseDelay | `number`  |    500    | Delay for releasing the button after the progress animation |
| fakePress    | `boolean` |  `false`  | When set to `true` triggers a fake button press             |



### `zoinodemodules` specific props

Being a wrapper on the **`ZButton`** component, it accepts its props plus the following ones.

| Attribute    |   Type    |  Default  | Description                                                 |
| :----------- | :-------: | :-------: | :---------------------------------------------------------- |
| type         | `string`  | `primary` | Render a specific button type. Bundled with Facebook, Instagram, Twitter, Github, Youtube, Linkedin, Pinterest, Reddit, Messenger, Whatsapp and Google Plus (RIP) types and share methods |
| icon         | `bool`    | `false`   | Should render the social icon relative to the button type |
| iconHeight   | `number`  | `23`      | Rendered icon height |
| icon         | `number`  | `30`      | Rendered icon width |
| url          | `string`  | `null`    | Url string to be used on the sharer |
| image        | `string`  | `null`    | Image url to be rendered on the sharer |
| message      | `string`  | `null`    | Message string to be rendered on the share post |
| phone        | `string`  | `null`    | Phone number to be used when using the Whatsapp sharer |
| user         | `string`  | `null`    | Username to be redirected to when using the Messenger sharer |


## License

MIT. Copyright (c) 2021 Zoi Fintech Services PVT.
