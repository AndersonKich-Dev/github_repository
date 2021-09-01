export type CommitUrl = {
    date: string
    commitName: string
    commitUrl: string
}

export type CommitData = {
   commit_length: number
   commit_url: CommitUrl[]
}

export type Repository = {
    user: string | undefined
    name: string
    html_url: string
    created_at: string
    clone_url: string
    stargazers_count: number
    forks_count: number
    commits: CommitData | null
    size: number
}

export type Avatar = {
    avatar_url: string
    name: string
}
