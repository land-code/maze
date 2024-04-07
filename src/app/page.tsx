'use client'
import { MazeBuilder } from "@/lib/maze-generator";
import { useEffect, useId } from "react";

export default function Home() {
  const mazeContainerId = useId()

  useEffect(() => {
    let Maze = new MazeBuilder(16, 16)
    Maze.placeKey()
    Maze.display(mazeContainerId)
  }, [mazeContainerId])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id={mazeContainerId} />
    </main>
  );
}
