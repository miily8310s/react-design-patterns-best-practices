import axios from "axios";
import {
  useState,
  useEffect,
  useCallback,
  createContext,
  ReactElement,
} from "react";

export interface Issue {
  number: number;
  title: string;
  url: string;
  state: string;
}

interface IssueContextType {
  issues: Issue[];
  url: string;
}

// createContextの引数には指定した型定義に沿って初期値を渡す
export const IssueContext = createContext<IssueContextType>({
  issues: [],
  url: "",
});

const IssueProvider = ({
  children,
  url,
}: {
  children: ReactElement;
  url: string;
}) => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const fetchIssues = useCallback(async () => {
    const response = await axios.get<Issue[]>(url);
    if (response) {
      setIssues(response.data);
    }
  }, [url]);
  useEffect(() => {
    fetchIssues();
  }, [fetchIssues]);
  const context = { issues, url };
  return (
    <IssueContext.Provider value={context}>{children}</IssueContext.Provider>
  );
};

export default IssueProvider;
