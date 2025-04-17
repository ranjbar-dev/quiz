import type { JobModel } from "~/models/job"

export const useJobStore = defineStore('job', () => {
    
    const jobs = ref<JobModel[]>([])
    const loading_jobs = ref<boolean>(true)
   
    const fetchJobs = async (): Promise<JobModel[] | null> => {

        loading_jobs.value = true
        return ask.getJobs()
            .then( (value) => jobs.value = value )
            .finally( () => loading_jobs.value = false )
    }

    return {
        jobs,
        loading_jobs,

        fetchJobs,
    }
})