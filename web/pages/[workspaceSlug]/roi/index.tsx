import { useRouter } from "next/router";
import Router from 'next/router'

export default function Roi() {
    const router = useRouter();
    const { workspaceSlug, } = router.query;

    Router.push(`/${workspaceSlug}/roi/running`)
}