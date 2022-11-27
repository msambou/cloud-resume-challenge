class Resume {
    async getViews(){
        const url = "https://tjxx0uyvij.execute-api.us-east-2.amazonaws.com/dev/view-count"
        
        const response = await fetch(url)
        const responseData = await response.json()
        return responseData
    }

    async incrementViews() {
        const url = "https://tjxx0uyvij.execute-api.us-east-2.amazonaws.com/dev/view-count"
        
        const response = await fetch(url, {method: "PUT"})
        const responseData = await response.json()
        return responseData
    }
}

export default Resume;