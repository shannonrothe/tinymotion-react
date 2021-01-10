<h3 align="center">tinymotion-react</h3>

<p align="center">tinymotion-react is a React.js animation library based on <a href="https://github.com/lepikhinb/tinymotion">Tinymotion</a>, that seamlessly works with Tailwind CSS.</p>

<table width="100%" align="center">
    <tr>
        <td align="center"><a href="https://tinymotion.me/#hover"><strong>Hover</strong></a></td>
        <td align="center"><a href="https://tinymotion.me/#click"><strong>Click</strong></a></td>
        <td align="center"><a href="https://tinymotion.me/#trigger"><strong>Trigger (to be implemented)</strong></a></td>
        <td align="center"><a href="https://tinymotion.me/#auto"><strong>Auto</strong></a></td>
    </tr>
    <tr>
        <td align="center">
            <img src="https://tinymotion.me/preview/1.gif">
        </td>
        <td align="center">
            <img src="https://tinymotion.me/preview/2.gif">
        </td>
        <td align="center">
            <img src="https://tinymotion.me/preview/3.gif">
        </td>
        <td align="center">
            <img src="https://tinymotion.me/preview/4.gif">
        </td>
    </tr>
    <tr>
        <td align="center"><a href="https://tinymotion.me/usage#switch"><strong>Switch</strong></a></td>
        <td align="center"><a href="https://tinymotion.me/usage#grid"><strong>Grid</strong></a></td>
        <td align="center"><a href="https://tinymotion.me/usage#shuffle"><strong>Shuffle</strong></a></td>
        <td align="center"><a href="https://tinymotion.me/usage#loader"><strong>Loader</strong></a></td>
    </tr>
    <tr>
        <td align="center">
            <img src="https://tinymotion.me/preview/5.gif">
        </td>
        <td align="center">
            <img src="https://tinymotion.me/preview/6.gif">
        </td>
        <td align="center">
            <img src="https://tinymotion.me/preview/7.gif">
        </td>
        <td align="center">
            <img src="https://tinymotion.me/preview/8.gif">
        </td>
    </tr>
</table>

## Installation

**NPM**

```sh
npm i -S tinymotion-react
```

**Yarn**

```sh
yarn add tinymotion-react
```

## How to use

```jsx
function App() {
  return (
    <Motion
      hover={["scale-100", "scale-125 rotate-45", "scale-100 rotate-0"]}
      options={{
        repeat: true,
        rollback: true,
        instantRollback: true,
        delay: 0,
        stepDelay: 0,
        factor: 1,
        skip: 0,
        duration: 600,
        ease: "ease-in-out",
      }}
      class="w-16 h-16 bg-blue-500 rounded-lg shadow"
    />
  );
}

export default App;
```

## Examples

**Note:** These examples are in Vue

- [Hover](https://tinymotion.me/#hover)
- [Click](https://tinymotion.me/#click)
- [External trigger](https://tinymotion.me/#trigger)
- [Auto](https://tinymotion.me/#auto)
- [Switch](https://tinymotion.me/usage#switch)
- [Loader](https://tinymotion.me/usage#loader)

## Notes

This project is based on the original Vue version and is subject to differ at times. Some features may be missing but I will aim to keep it updated with the original version.

## Authors

[Boris Lepikhin](https://twitter.com/lepikhinb) – original author of Vue version
[Shannon Rothe](https://twitter.com/shannonrothe)
