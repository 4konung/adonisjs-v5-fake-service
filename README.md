## Setup
**Step 1:** git clone this repo  
```bash
git clone https://github.com/4konung/adonisjs-v5-fake-service.git
```  

**Step 2:** cd to the cloned repo and install dependencies     
```bash
cd adonisjs-v5-fake-service/
npm install
```  

**Step 4:** The `.env` file is ignored by git.
- copy file `.env.example` to `.env`  

## How to Run:  
- run dev `npm run start`
- run tests `npm run test`

## Problem:
In the test file `test/FakeServiceMethod.spec.ts` this line of code, should fake service call:     
```javascript
const fakeResponse = 'fake response data'

  Application.container.fake('Services/SomeService', () => {
    return {
      doStuff() {
        console.log('fakes service call')

        return fakeResponse
      }
    }
  })
```
