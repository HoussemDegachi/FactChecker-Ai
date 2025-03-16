import { create } from "zustand";
import axios from "axios";

const API_URL = 'https://missinformation-detector-b-production.up.railway.app/analysis/'


const useAnalysisStore = create((set) => ({
    analysis:null,
	error: null,
	isLoading: false,

	getAnalysis: async (ytid) => {
        console.log('ytid store ...', ytid)
		set({ isLoading: true, error: null });
		try {
			const response = await axios.get(`${API_URL}${ytid}`);
            console.log('RESPONSE in store', response)
			set({ analysis: response.data, isLoading: false });
		} catch (error) {
			set({ error: "Error getting analysis...", isLoading: false });
		}
	}
}));

export default useAnalysisStore;