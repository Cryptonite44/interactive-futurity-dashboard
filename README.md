# Welcome to your GPT Engineer project

## Project info

**URL**: https://run.gptengineer.app/projects/fa5ae9fc-244c-4c8e-9c54-e92e4cf12baf/improve

## Deploying to Netlify with a Custom Domain

1. **Prepare your project**
   ```sh
   # Install dependencies
   npm i
   
   # Build your project
   npm run build
   ```

2. **Deploy to Netlify**
   - Create a free account at [Netlify](https://www.netlify.com)
   - Install Netlify CLI: `npm install -g netlify-cli`
   - Login to Netlify: `netlify login`
   - Deploy with: `netlify deploy`
   - Follow the prompts and choose the `dist` folder when asked for the publish directory

3. **Add your custom domain**
   - Go to your site settings in Netlify
   - Navigate to "Domain Management"
   - Click "Add custom domain"
   - Follow the DNS configuration instructions
   - Wait for DNS propagation (can take up to 48 hours)

## Alternative deployment methods

### Use GPT Engineer's built-in deployment
Simply visit your project at [GPT Engineer](https://gptengineer.app/projects/fa5ae9fc-244c-4c8e-9c54-e92e4cf12baf/improve) and click on Share -> Publish.

### Use your preferred IDE locally

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Technologies used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS