"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  FaCalendar,
  FaClock,
  FaFacebook,
  FaLink,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Shopify Apps with Next.js and Prisma",
    excerpt:
      "Learn how to build production-ready Shopify apps using Next.js 14, Prisma ORM, and best practices for authentication and API design.",
    category: "Shopify",
    date: "Dec 5, 2025",
    readTime: "8 min read",
    author: "Mehedi Hasan Ridoy",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&auto=format&fit=crop",
    content: `
# Building Scalable Shopify Apps with Next.js and Prisma

Shopify app development has evolved significantly over the years. In this comprehensive guide, we'll explore how to build production-ready Shopify apps using modern technologies like Next.js 14 and Prisma ORM.

## Why Next.js for Shopify Apps?

Next.js provides several key advantages for Shopify app development:

- **Server-Side Rendering**: Improve SEO and initial load times
- **API Routes**: Built-in backend functionality without a separate server
- **TypeScript Support**: Enhanced type safety across your application
- **App Router**: Modern routing system with nested layouts

## Setting Up Your Development Environment

First, let's set up a new Next.js project with all the necessary dependencies:

\`\`\`bash
npx create-next-app@latest my-shopify-app
cd my-shopify-app
npm install @shopify/shopify-api prisma @prisma/client
\`\`\`

## Authentication Flow

Implementing OAuth authentication is crucial for Shopify apps. Here's a basic implementation:

\`\`\`typescript
import { shopifyApi } from '@shopify/shopify-api';

const shopify = shopifyApi({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET,
  scopes: ['read_products', 'write_products'],
  hostName: process.env.HOST_NAME,
});
\`\`\`

## Database Schema with Prisma

Design your database schema to store shop data and session information:

\`\`\`prisma
model Shop {
  id        String   @id @default(cuid())
  domain    String   @unique
  accessToken String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
\`\`\`

## Best Practices

1. **Use Session Storage**: Implement proper session storage for OAuth tokens
2. **Webhook Handling**: Set up webhooks for real-time updates
3. **Error Handling**: Implement comprehensive error handling
4. **Rate Limiting**: Respect Shopify's API rate limits

## Deployment Considerations

When deploying your Shopify app to production:

- Use environment variables for sensitive data
- Implement proper logging and monitoring
- Set up automated testing
- Use a CDN for static assets

## Conclusion

Building Shopify apps with Next.js and Prisma provides a robust foundation for scalable e-commerce solutions. By following these best practices, you can create apps that are maintainable, performant, and secure.
    `,
  },
  {
    id: 2,
    title: "Mastering Server Components in Next.js 15",
    excerpt:
      "Deep dive into React Server Components, streaming, and advanced patterns for building lightning-fast web applications.",
    category: "Next.js",
    date: "Nov 28, 2025",
    readTime: "12 min read",
    author: "Mehedi Hasan Ridoy",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&auto=format&fit=crop",
    content: `
# Mastering Server Components in Next.js 15

React Server Components represent a paradigm shift in how we build web applications. Let's explore how to leverage them effectively in Next.js 15.

## Understanding Server Components

Server Components allow you to render components on the server and send only the necessary HTML to the client. This results in:

- Smaller bundle sizes
- Faster initial page loads
- Direct database access
- Better SEO

## Key Differences from Client Components

\`\`\`typescript
// Server Component (default)
async function ProductList() {
  const products = await db.product.findMany();
  return <div>{products.map(p => <ProductCard key={p.id} {...p} />)}</div>;
}

// Client Component
'use client';
function InteractiveCart() {
  const [items, setItems] = useState([]);
  // ... interactive logic
}
\`\`\`

## Streaming and Suspense

Use Suspense boundaries to stream content progressively:

\`\`\`tsx
<Suspense fallback={<Skeleton />}>
  <SlowDataComponent />
</Suspense>
\`\`\`

## Data Fetching Patterns

Server Components enable new data fetching patterns:

1. **Parallel Data Fetching**: Fetch multiple data sources simultaneously
2. **Sequential Fetching**: Waterfall requests when needed
3. **Preloading**: Warm up connections before rendering

## Best Practices

- Keep Server Components at the top of your component tree
- Use Client Components sparingly for interactivity
- Leverage streaming for better perceived performance
- Cache data appropriately

## Conclusion

Server Components are a game-changer for Next.js applications. By understanding when and how to use them, you can build faster, more efficient web applications.
    `,
  },
  {
    id: 3,
    title: "Go Microservices: From Development to Production",
    excerpt:
      "Complete guide to building, deploying, and scaling microservices with Go, Docker, and Kubernetes.",
    category: "Backend",
    date: "Nov 20, 2025",
    readTime: "15 min read",
    author: "Mehedi Hasan Ridoy",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop",
    content: `
# Go Microservices: From Development to Production

Go (Golang) has become the go-to language for building microservices. In this comprehensive guide, we'll cover everything from development to production deployment.

## Why Go for Microservices?

- **Performance**: Compiled to native code with minimal overhead
- **Concurrency**: Built-in goroutines for handling multiple requests
- **Simple Deployment**: Single binary with no dependencies
- **Strong Standard Library**: HTTP servers, JSON handling, and more

## Project Structure

\`\`\`
/cmd
  /api
    main.go
/internal
  /handlers
  /services
  /repository
/pkg
  /models
  /utils
\`\`\`

## Building a Simple Service

\`\`\`go
package main

import (
    "log"
    "net/http"
    "github.com/gorilla/mux"
)

func main() {
    r := mux.NewRouter()
    r.HandleFunc("/api/health", healthCheck).Methods("GET")
    r.HandleFunc("/api/products", getProducts).Methods("GET")
    
    log.Fatal(http.ListenAndServe(":8080", r))
}
\`\`\`

## Docker Configuration

Create a multi-stage Dockerfile for optimal image size:

\`\`\`dockerfile
FROM golang:1.21-alpine AS builder
WORKDIR /app
COPY . .
RUN go build -o main ./cmd/api

FROM alpine:latest
COPY --from=builder /app/main .
EXPOSE 8080
CMD ["./main"]
\`\`\`

## Kubernetes Deployment

Deploy your service with proper resource limits and health checks:

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: product-service
spec:
  replicas: 3
  template:
    spec:
      containers:
      - name: api
        image: product-service:latest
        resources:
          limits:
            memory: "256Mi"
            cpu: "500m"
\`\`\`

## Service Communication

Implement gRPC for inter-service communication:

- Type-safe APIs
- Better performance than REST
- Built-in load balancing

## Monitoring and Observability

Use Prometheus and Grafana for metrics:

\`\`\`go
import "github.com/prometheus/client_golang/prometheus"

var httpRequestsTotal = prometheus.NewCounterVec(
    prometheus.CounterOpts{
        Name: "http_requests_total",
        Help: "Total number of HTTP requests",
    },
    []string{"method", "endpoint"},
)
\`\`\`

## Conclusion

Building microservices with Go provides excellent performance and maintainability. Combined with Docker and Kubernetes, you can create robust, scalable distributed systems.
    `,
  },
];

export default function BlogDetailPage() {
  const params = useParams();
  const postId = parseInt(params.id as string);
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-brand-primary hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${currentUrl}&text=${post.title}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`,
  };

  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        </motion.div>
      </div>

      {/* 3 Column Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2 Columns */}
          <article className="lg:col-span-2">
            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="inline-block px-4 py-2 bg-brand-gradient text-white rounded-full text-sm font-medium shadow-lg mb-6">
                {post.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              {post.title}
            </motion.h1>

            {/* Meta Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center space-x-2">
                <FaCalendar className="text-brand-primary" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaClock className="text-brand-secondary" />
                <span>{post.readTime}</span>
              </div>
              <div className="text-gray-900 dark:text-white font-medium">
                By {post.author}
              </div>
            </motion.div>

            {/* Share Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center space-x-4 mb-12"
            >
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                Share:
              </span>
              <a
                href={shareLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <FaFacebook />
              </a>
              <a
                href={shareLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <FaTwitter />
              </a>
              <a
                href={shareLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <FaLinkedin />
              </a>
              <button
                onClick={copyLink}
                className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <FaLink />
              </button>
            </motion.div>

            {/* Article Body */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <div
                className="article-content"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .split("\n")
                    .map((line) => {
                      // Convert markdown-style headings
                      if (line.startsWith("# "))
                        return `<h1>${line.slice(2)}</h1>`;
                      if (line.startsWith("## "))
                        return `<h2>${line.slice(3)}</h2>`;
                      if (line.startsWith("### "))
                        return `<h3>${line.slice(4)}</h3>`;
                      // Convert code blocks
                      if (line.startsWith("```")) {
                        const lang = line.slice(3);
                        return lang
                          ? `<pre><code class="language-${lang}">`
                          : `<pre><code>`;
                      }
                      if (line === "```") return `</code></pre>`;
                      // Convert list items
                      if (line.match(/^-\s/))
                        return `<li>${line.slice(2)}</li>`;
                      if (line.match(/^\d+\.\s/))
                        return `<li>${line.slice(line.indexOf(".") + 2)}</li>`;
                      // Regular paragraphs
                      if (line.trim() === "") return "<br/>";
                      return `<p>${line}</p>`;
                    })
                    .join("\n"),
                }}
              />
            </motion.div>
          </article>

          {/* Sidebar - 1 Column */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32">
              {/* Author Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-8"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  About Author
                </h3>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    MR
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">
                      {post.author}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Full Stack Developer
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Backend-focused developer specializing in NestJS, Go, and
                  scalable architecture. Co-founder & CTO of Softs.ai.
                </p>
                <Link
                  href="/about"
                  className="text-brand-primary hover:text-brand-secondary font-semibold text-sm"
                >
                  Learn More →
                </Link>
              </motion.div>

              {/* Related Posts */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                  Related Articles
                </h3>
                <div className="space-y-6">
                  {blogPosts
                    .filter((p) => p.id !== postId)
                    .slice(0, 3)
                    .map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        href={`/blog/${relatedPost.id}`}
                        className="group block"
                      >
                        <div className="flex space-x-4">
                          <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden">
                            <Image
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1">
                            <span className="text-xs font-semibold text-brand-primary">
                              {relatedPost.category}
                            </span>
                            <h4 className="text-sm font-bold mt-1 mb-2 text-gray-900 dark:text-white group-hover:text-brand-primary transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-xs text-gray-500">
                              {relatedPost.readTime}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </motion.div>
            </div>
          </aside>
        </div>
      </div>

      {/* Custom Styles for Article Content */}
      <style jsx global>{`
        .article-content h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 2rem 0 1rem;
          color: var(--color-primary);
        }
        .article-content h2 {
          font-size: 2rem;
          font-weight: 700;
          margin: 2rem 0 1rem;
          color: var(--color-secondary);
        }
        .article-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 1.5rem 0 0.75rem;
        }
        .article-content p {
          margin: 1rem 0;
          line-height: 1.8;
          font-size: 1.125rem;
        }
        .article-content pre {
          background: #1e293b;
          color: #e2e8f0;
          padding: 1.5rem;
          border-radius: 0.75rem;
          overflow-x: auto;
          margin: 1.5rem 0;
          font-size: 0.875rem;
          line-height: 1.6;
        }
        .article-content code {
          font-family: "Courier New", monospace;
        }
        .article-content li {
          margin: 0.5rem 0;
          margin-left: 2rem;
          line-height: 1.8;
          font-size: 1.125rem;
        }
        .article-content ul,
        .article-content ol {
          margin: 1rem 0;
        }
      `}</style>
    </div>
  );
}
