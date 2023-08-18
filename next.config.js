/** @type {import('next').NextConfig} */
<<<<<<< HEAD
const nextConfig = {}

module.exports = nextConfig
=======
const nextConfig = {
   experimental: {
      appDir: true,
      swcPlugins: [["next-superjson-plugin", {}]],
   },
   images: {
      domains: [
        'res.cloudinary.com', 
        'avatars.githubusercontent.com',
        'lh3.googleusercontent.com'
      ]
    }
};

module.exports = nextConfig;
>>>>>>> dev
