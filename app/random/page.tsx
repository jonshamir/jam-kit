"use client";

import styles from "./page.module.css";
import {
  PRIVATE_SUPABASE_SERVICE_KEY,
  PUBLIC_SUPABASE_ANON_KEY,
  PUBLIC_SUPABASE_URL,
  SUPABASE_ENABLED,
} from "@/lib/config";
import { useState } from "react";
import Message from "./components/Message";
import { getCurrentComponent } from "./utils";
import { useData } from "./hooks";
import { AssignedTeam } from "./types";

export default function App() {
  return (
    <div id={styles.randomApp}>
      <RandomApp />
    </div>
  );
}

function RandomApp() {
  const [currentStateId, transitionToStateFn] = useState(0);

  const { data, isLoading: dataLoading, isError: dataError } = useData();
  const [teams, setTeams] = useState<AssignedTeam[]>([]);
  const [assignedStudents, setAssignedStudents] = useState<number[]>([]);
  const [currentTeamMembers, setCurrentTeamMembers] = useState<number[]>([]);

  if (!SUPABASE_ENABLED)
    return <Message content={PRIVATE_SUPABASE_SERVICE_KEY} />;
  if (dataLoading) return <Message content="טוען..." />;
  if (dataError) return <Message content="שגיאה" />;
  if (!data) return <Message content="לא ניתן לטעון את המידע" />;

  return getCurrentComponent(
    currentStateId,
    data,
    teams,
    setTeams,
    assignedStudents,
    setAssignedStudents,
    currentTeamMembers,
    setCurrentTeamMembers,
    transitionToStateFn
  );
}
