export const blogs = [
    {
        id: 1,
        title: "Ultimate MVP Development Guide for Startups",
        author: "AppifyDevs",
        date: "Unknown Date",
        category: "Startups",
        image:
            "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
        excerpt:
            "Learn how to build a Minimum Viable Product that startups can use to validate their ideas quickly and efficiently.",
        content: `
            <p>Building a Minimum Viable Product (MVP) is one of the most important steps for any startup. An MVP allows you to test your core business hypothesis with the least amount of effort and resources.</p>

            <h2>What is an MVP?</h2>
            <p>A Minimum Viable Product is the smallest version of your product that still delivers value to early customers. The goal is to learn fast, iterate quickly, and validate assumptions before investing heavily.</p>

            <h2>Why Startups Need an MVP</h2>
            <ul>
                <li>Validate your business idea with real users</li>
                <li>Reduce development cost and time</li>
                <li>Gather early feedback and iterate</li>
                <li>Attract investors with real data</li>
            </ul>

            <h2>Steps to Build an MVP</h2>
            <p>At AppifyDevs, we follow a proven process to help startups build successful MVPs:</p>
            <ol>
                <li>Identify the core problem you're solving</li>
                <li>Define the smallest feature set</li>
                <li>Design a simple, usable interface</li>
                <li>Develop and launch quickly</li>
                <li>Measure, learn, and iterate</li>
            </ol>

            <h2>Conclusion</h2>
            <p>An MVP is not the final product—it's a learning tool. By focusing on the essentials, startups can validate their ideas faster and with less risk. If you're planning to build an MVP, our team at AppifyDevs is here to help.</p>
        `,
    },
    {
        id: 2,
        title: "Getting Started with DevOps in 2026",
        author: "AppifyDevs",
        date: "Jan 15, 2026",
        category: "DevOps",
        image:
            "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1200&q=80",
        excerpt:
            "A practical introduction to DevOps practices, tools, and culture for modern development teams.",
        content: `
            <p>DevOps is more than a set of tools—it's a culture that brings development and operations teams together. In this guide, we cover the basics of DevOps and how to get started.</p>

            <h2>Core DevOps Principles</h2>
            <ul>
                <li>Collaboration between Dev and Ops</li>
                <li>Automation of repetitive tasks</li>
                <li>Continuous integration & delivery</li>
                <li>Monitoring and feedback loops</li>
            </ul>

            <h2>Popular DevOps Tools</h2>
            <p>Docker, Kubernetes, Jenkins, Terraform, and GitHub Actions are just a few of the tools modern teams rely on.</p>

            <h2>Getting Started</h2>
            <p>Start small—introduce CI/CD in one project, then expand. Culture change takes time but pays off massively.</p>
        `,
    },
    {
        id: 3,
        title: "Laravel Best Practices for Modern Web Apps",
        author: "AppifyDevs",
        date: "Feb 02, 2026",
        category: "Laravel",
        image:
            "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?auto=format&fit=crop&w=1200&q=80",
        excerpt:
            "Write cleaner, more maintainable Laravel code with these time-tested best practices.",
        content: `
            <p>Laravel offers an elegant syntax and powerful features. Following best practices ensures your application stays maintainable as it grows.</p>

            <h2>Follow the Repository Pattern</h2>
            <p>Keep database logic out of controllers by using repositories and services.</p>

            <h2>Use Form Requests for Validation</h2>
            <p>Move validation rules out of controllers into dedicated Form Request classes.</p>

            <h2>Leverage Eloquent Efficiently</h2>
            <p>Use eager loading (<code>with()</code>) to avoid N+1 queries and keep your app fast.</p>
        `,
    },
];

export const getBlogById = (id) =>
    blogs.find((b) => b.id === Number(id));