# Real Estate Homepage

This is a simple real estate homepage developed using Next.js, Tailwind CSS, DaisyUI, and MongoDB. The project is built as part of the assessment for the Junior Front-End Developer position at Typetech IT.

## 🚀 Technologies Used

- **Next.js** - React framework for server-side rendering and static site generation.
- **Tailwind CSS** - Utility-first CSS framework for styling.
- **DaisyUI** - Component library built on top of Tailwind CSS.
- **MongoDB** - NoSQL database used for managing data.

## 📌 Features

- Fully responsive design
- Modern UI with DaisyUI components
- Data fetched from MongoDB using Next.js API routes
- Optimized for performance and SEO with Next.js features

## 📂 Project Structure

```
├── components/       # Reusable UI components
├── pages/            # Next.js pages including API routes
│   ├── index.js      # Homepage
│   ├── api/         # API routes to fetch data from MongoDB
├── public/           # Static assets
├── styles/          # Global styles
├── .env.local        # Environment variables (MongoDB connection, etc.)
└── README.md         # Project documentation
```

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/DKAbir111/typeTech_Task.git
   cd typeTech_Task
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file and add the required MongoDB connection string:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

   The application will be available at `http://localhost:3000`

## 🚀 Deployment

To deploy the application, you can use Vercel:
```sh
vercel
```
Make sure to add the environment variables in your Vercel project settings.

---

GitHub Repository: [TypeTech Task](https://github.com/DKAbir111/typeTech_Task.git)

Happy Coding! 🎉
