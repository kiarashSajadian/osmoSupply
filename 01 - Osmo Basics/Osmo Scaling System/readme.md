Implementation
To make the scaling system work add the var(--size-font) variable to the font-size of the <body>

body {
  font-size: var(--size-font);
}

When using a container add the var(--size-container) variable to the max-width of the .container


.container {
  max-width: var(--size-container);
}

.container.medium {
  max-width: calc(var(--size-container) * 0.85);
}

.container.small {
  max-width: calc(var(--size-container) * 0.7);
}


Ideal container size
On the --size-container-ideal variable add the size of your design in Figma (no px behind the value)

Max container size
On each viewport you can define a --size-container-max for the scaling system. It will stop after that value is reached.