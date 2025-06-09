
const isDev = process.argv.indexOf('dev') !== -1
const isBuild = process.argv.indexOf('build') !== -1
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
    process.env.VELITE_STARTED = '1'
    const { build } = await import('velite')
    await build({ watch: isDev, clean: !isDev })
}

/** @type {import('next').NextConfig} */
export default {
    crossOrigin: 'anonymous',
    async redirects() {
        return [
            {
                source: "/docs/:slug((?![12]\\.x/).*)",
                missing: [
                    {
                        type: "header",
                        key: "x-no-redirect",
                    },
                ],
                destination: "/docs/1.x/:slug*",
                permanent: false,
            },
        ]
    }
}
