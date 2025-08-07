import React from "react";
import { motion } from "framer-motion";
import {
  Copy,
  GitBranch,
  Upload,
  FileImage,
  Terminal,
  Folder,
  Check,
} from "lucide-react";

const Documentation: React.FC = () => {
  const [copiedText, setCopiedText] = React.useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const CodeBlock: React.FC<{ code: string; language?: string }> = ({
    code,
    language = "bash",
  }) => (
    <div className="relative group">
      <pre className="bg-neutral-900 text-neutral-100 rounded-xl p-4 overflow-x-auto text-sm leading-relaxed">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <button
        onClick={() => copyToClipboard(code)}
        className="absolute top-3 right-3 p-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200"
      >
        {copiedText === code ? (
          <Check size={16} className="text-green-400" />
        ) : (
          <Copy size={16} className="text-neutral-300" />
        )}
      </button>
    </div>
  );

  const sections = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: GitBranch,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-600 leading-relaxed">
            Welcome! Contributing to our gallery is simple and straightforward.
            Follow these steps to add your profile and become part of our
            community.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Prerequisites</h4>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• A GitHub account</li>
              <li>• Git installed on your computer</li>
              <li>• A profile image (JPG, PNG, or WebP format)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900 mb-3">
               Fork and Clone the Repository
            </h4>
            <CodeBlock
              code={`# Fork the repository on GitHub, then clone it locally
git clone https://github.com/Dany1211/Contributors_AICC.git
cd Contributors_AICC`}
            />
          </div>
        </div>
      ),
    },
    {
      id: "adding-images",
      title: "Adding Your Profile Image",
      icon: Upload,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-600 leading-relaxed">
            Your profile image should be professional and represent you well.
            Here's how to add it to the project.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <h4 className="font-semibold text-amber-900 mb-2">
              Image Requirements
            </h4>
            <ul className="text-amber-800 text-sm space-y-1">
              <li>• Dimensions: 400x400px minimum</li>
              <li>• Format: JPG, PNG, or WebP</li>
              <li>• File size: Under 2MB</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-900 mb-3">
              File Structure
            </h4>
            <CodeBlock
  language="text"
  code={`Contributors_AICC/
├── src/
│   ├── gallery/
│   │   ├── sarah-chen.jpg
│   │   ├── marcus-johnson.jpg
│   │   └── your-name.jpg          ← Add your image here
│   └── data/
│       └── contributors.ts        ← Add your info here`}
 />

          </div>

         
        </div>
      ),
    },
    {
      id: "code-examples",
      title: "Updating the Contributors Data",
      icon: FileImage,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-600 leading-relaxed">
            Once your image is added, you need to update the contributors data
            file to include your information.
          </p>

          <div>
            <h4 className="font-semibold text-neutral-900 mb-3">
              Edit contributors.ts
            </h4>
            <p className="text-sm text-neutral-600 mb-3">
              Open{" "}
              <code className="bg-neutral-100 px-2 py-1 rounded">
                src/data/contributors.ts
              </code>{" "}
              and add your entry to the array:
            </p>
            <CodeBlock
              language="typescript"
              code={`export const contributors: Contributor[] = [
  // ... existing contributors
  {
    id: 'unique-id-here',
    name: 'Your Full Name',
    role: 'Your Role/Title',
    avatar: {import-name},
    github: 'your-github-username',
    contributions: 1  // Start with 1, we'll update this
  }
];`}
            />
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <h4 className="font-semibold text-green-900 mb-2">Pro Tips</h4>
            <ul className="text-green-800 text-sm space-y-1">
              <li>• Use a unique ID (your GitHub username works well)</li>
              <li>• Keep your role concise but descriptive</li>
              <li>• Double-check the image path matches your file</li>
              <li>• Your GitHub username should match exactly</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900 mb-3">
              Example Entry
            </h4>
            <CodeBlock
              language="typescript"
              code={`{
  id: 'alexsmith',
  name: 'Alex Smith',
  role: 'Frontend Developer',
  avatar: alex ,
  github: 'alexsmith',
  contributions: 1
}`}
            />
          </div>
        </div>
      ),
    },
    {
      id: "git-commands",
      title: "Submitting Your Contribution",
      icon: Terminal,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-600 leading-relaxed">
            After adding your image and updating the data file, it's time to
            commit your changes and push them.
          </p>

          <div>
            <h4 className="font-semibold text-neutral-900 mb-3">
              1. Stage Your Changes
            </h4>
            <CodeBlock
              code={`# Check what files you've changed
git status

# Add your new files
git add src/gallery/your-name.jpg
git add src/data/contributors.ts

# Or add all changes at once
git add .`}
            />
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900 mb-3">
              2. Commit Your Changes
            </h4>
            <CodeBlock
              code={`# Create a meaningful commit message
git commit -m "feat: add [Your Name] to contributors gallery

- Add profile image for [Your Name]
- Update contributors data with role and GitHub info"

# Or use a simpler version
git commit -m "Add [Your Name] to contributors"`}
            />
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <h4 className="font-semibold text-purple-900 mb-2">
              What Happens Next?
            </h4>
            <p className="text-purple-800 text-sm">
              Our maintainers will review your commit. They might ask for
              small changes or approve it directly. Once approved,
              your profile will appear in the gallery!
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4"
        >
          Contribution Guide
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-neutral-600 tracking-tight max-w-2xl mx-auto"
        >
          A step-by-step guide to adding your profile to our contributors
          gallery. Perfect for beginners!
        </motion.p>
      </div>

      {/* Table of Contents */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-neutral-50 rounded-2xl p-6 mb-12"
      >
        <h2 className="text-xl font-semibold text-neutral-900 mb-4 flex items-center">
          <Folder size={20} className="mr-2" />
          Table of Contents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white transition-colors duration-200 group"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-neutral-200 rounded-lg flex items-center justify-center group-hover:bg-neutral-800 transition-colors duration-200">
                <section.icon
                  size={16}
                  className="text-neutral-600 group-hover:text-white"
                />
              </div>
              <span className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900">
                {section.title}
              </span>
            </a>
          ))}
        </div>
      </motion.div>

      {/* Sections */}
      <div className="space-y-16">
        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            id={section.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="scroll-mt-20"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center">
                <section.icon size={20} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
                {section.title}
              </h2>
            </div>
            <div className="prose-neutral max-w-none">{section.content}</div>
          </motion.section>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-20 text-center p-8 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-2xl"
      >
        <h3 className="text-xl font-semibold text-neutral-900 mb-3">
          Need Help?
        </h3>
        <p className="text-neutral-600 mb-4">
          If you run into any issues or have questions, don't hesitate to reach
          out!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-neutral-500">
          <span>• Open an issue on GitHub</span>
          <span className="hidden sm:block">•</span>
          <span>• Ask in our Discord community</span>
          <span className="hidden sm:block">•</span>
          <span>• Email us directly</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Documentation;
