import ClientProjects from "../pages/client-projects";
import ProjectDetail from "../pages/project-detail";

export const CLIENT_PROJECTS_ROUTES = {
  path: 'client-projects',
  children: [
    {
      index: true,
      Component: ClientProjects,
    },
    {
      path: ':slug',
      Component: ProjectDetail,
    }
  ]
}