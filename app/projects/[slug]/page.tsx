import { allProjects } from "@/data/projects";
import ProjectClient from "./ProjectClient";

export async function generateStaticParams() {
    return allProjects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <ProjectClient slug={slug} />;
}
