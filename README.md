# QuizMaster - Interactive Learning Platform

QuizMaster is a modern web application built with Next.js that allows users to both contribute to and participate in quizzes. With a beautiful, animated interface and robust backend, it provides an engaging platform for knowledge sharing and testing.

![QuizMaster Screenshot](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop)

## 🚀 Features

- **Interactive Quiz Taking**

  - Beautifully animated question transitions
  - Real-time feedback on answers
  - Progress tracking
  - Responsive design for all devices

- **Question Contribution**

  - User-friendly question submission interface
  - Multiple choice answer options
  - Correct answer designation
  - Form validation

- **User Dashboard**
  - Track contributed questions
  - View quiz performance statistics
  - Personal progress monitoring

## 🛠️ Tech Stack

- **Frontend**

  - Next.js 13.5 (React)
  - TypeScript
  - Tailwind CSS
  - shadcn/ui Components
  - Framer Motion for animations
  - Lucide React for icons

- **Backend**

  - Prisma ORM
  - SQLite Database
  - Next.js API Routes

- **State Management**
  - Zustand
  - React Hooks

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/quizmaster.git
   cd quizmaster
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up the database:

   ```bash
   pnpm prisma generate
   pnpm prisma migrate dev
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

## 🗄️ Database Schema

The application uses a relational database with the following structure:

- **Users**

  - Personal information
  - Authentication details
  - Activity tracking

- **Questions**

  - Question text
  - Author reference
  - Creation timestamp
  - Multiple choice options

- **Options**

  - Answer text
  - Correct/incorrect flag
  - Question reference

- **UserAnswers**
  - User responses
  - Correctness tracking
  - Timestamp

## 🔧 Development

### Project Structure

```
quizmaster/
├── app/                    # Next.js app directory
│   ├── contribute/        # Question contribution page
│   ├── quiz/             # Quiz taking interface
│   └── page.tsx          # Home page
├── components/            # Reusable UI components
├── lib/                   # Utilities and store
└── prisma/               # Database schema and migrations
```

### Code Style

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Component-based architecture
- Custom hooks for reusable logic

### Best Practices

1. **State Management**

   - Use Zustand for global state
   - React hooks for local state
   - Minimize prop drilling

2. **Performance**

   - Implement proper memoization
   - Optimize database queries
   - Use Next.js image optimization

3. **Accessibility**
   - ARIA labels
   - Keyboard navigation
   - Color contrast compliance

## 🚀 Deployment

The application is configured for static export and can be deployed to various platforms:

```bash
pnpm build
```

The static output will be generated in the `out` directory.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Prisma](https://www.prisma.io/)

## 📧 Contact

For questions or support, please open an issue in the repository.

---

Built with ❤️ using Next.js and TypeScript
