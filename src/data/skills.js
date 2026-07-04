import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJava, FaGitAlt, FaGithub, FaCode } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiPython, SiMysql, SiDocker, SiKubernetes, SiTypescript } from "react-icons/si";
import { FaAws } from "react-icons/fa";

export const skillGroups =
    [
        {
            title: "Frontend",
            skills: [
                { name: "React", icon: FaReact },
                { name: "JavaScript", icon: SiJavascript },
                { name: "HTML", icon: FaHtml5 },
                { name: "CSS", icon: FaCss3Alt },
                { name: "Tailwind CSS", icon: SiTailwindcss },
            ]

        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", icon: FaNodeJs },
                { name: "Python", icon: SiPython },
                { name: "Java", icon: FaJava },
                { name: "SQL", icon: SiMysql },
            ]
        },
        {
            title: "Tools",
            skills: [
                { name: "Git", icon: FaGitAlt },
                { name: "GitHub", icon: FaGithub },
                { name: "VS Code", icon: FaCode },
            ]
        },
        {
            title: "Currently Learning",
            skills: [
                { name: "AWS", icon: FaAws },
                { name: "Docker", icon: SiDocker },
                { name: "Kubernetes", icon: SiKubernetes },
                { name: "Typescript", icon: SiTypescript },
            ]
        }
    ]