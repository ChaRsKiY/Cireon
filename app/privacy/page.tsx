import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import PageTransition from "@/components/page-transition"

const PrivacyPage = () => {
    return (
        <>
            <SiteHeader />
            <PageTransition>
                <h1>Privacy Policy</h1>
            </PageTransition>
            <SiteFooter />
        </>
    )
}

export default PrivacyPage