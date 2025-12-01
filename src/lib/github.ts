export async function getHomePage() {
    'use cache'

    const response = await getStrapiData(`/api/github`)
    return response?.data
}

export async function getStrapiData(url: string) {
    console.log('getStrapiData')

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/github`)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching data:', error);
        return null
    }
}