import { useQuery } from "@tanstack/react-query";

const LINKEDIN_ACCESS_TOKEN = import.meta.env.VITE_LINKEDIN_ACCESS_TOKEN;

interface LinkedInResponse {
  followers: number;
  engagement: string;
  posts: number;
  clicks: number;
}

async function fetchLinkedInData(): Promise<LinkedInResponse> {
  if (!LINKEDIN_ACCESS_TOKEN) {
    throw new Error("LinkedIn access token not found");
  }

  const response = await fetch(
    `https://api.linkedin.com/v2/organizationalEntityFollowerStatistics?q=organizationalEntity&organizationalEntity=urn:li:organization:{YOUR_ORGANIZATION_ID}`,
    {
      headers: {
        Authorization: `Bearer ${LINKEDIN_ACCESS_TOKEN}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch LinkedIn data");
  }

  const data = await response.json();
  
  return {
    followers: data.totalFollowerCount || 0,
    engagement: "2.5%", // This would need to be calculated based on your metrics
    posts: 84, // This would need to be fetched from posts endpoint
    clicks: 1800, // This would need to be fetched from analytics endpoint
  };
}

export function useLinkedInData() {
  return useQuery({
    queryKey: ["linkedin-stats"],
    queryFn: fetchLinkedInData,
    refetchInterval: 300000, // Refetch every 5 minutes
  });
}