# Install node
  Uses node 8.1 
  ``` 
    brew install node@8.11
    brew link node@8.11
  ```
  If you need to revert the linking to current (or choose a version)
  ```
    brew link --overwrite node
  ```
# Install dependencies
  This project uses babel-node 
  ```
    yarn install
  ``` 
# Run script
  `yarn run` will show you all available options
  To simply run the script:
  ```
    yarn install # If you have not yet
    yarn script
  ```