import { ReactElement, useState } from "react";
import { useRouter } from "next/router";

// layouts
import { AppLayout } from "layouts/app-layout";
// components
import RoiLayout from "components/issues/issue-layouts/roots/rio-layout/Roi-layout";
// ui
import { EmptyState } from "components/common";
// assets
import emptyView from "public/empty-state/view.svg";
// types
import { NextPageWithLayout } from "lib/types";
import { RoiHeader } from "components/issues/issue-layouts/roots/rio-layout/components/RoiHeader";


const ProjectViewIssuesPage: NextPageWithLayout = () => {
    // router
    const router = useRouter();
    const { workspaceSlug, projectId, } = router.query;
    const [open, setOpen] = useState(false)

    const error = false

    return (
        <>
            {error ? (
                <EmptyState
                    image={emptyView}
                    title="Project does not exist"
                    description="The Project you are looking for does not exist or has been deleted."
                    primaryButton={{
                        text: "View other projects",
                        onClick: () => router.push(`/${workspaceSlug}/roi/running`),
                    }}
                />
            ) : (
                <AppLayout header={<RoiHeader page='running' setOpen={() => setOpen(true)} />}>
                    <RoiLayout page='running' onClose={() => setOpen(false)} {...{ open, workspaceSlug, projectId, }} />
                </AppLayout>
            )}
        </>
    );
};

ProjectViewIssuesPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            {page}
        </>
    );
};

export default ProjectViewIssuesPage;
