import Player from 'react-player'

export function Video() {
  return (
    <div className="aspect-video w-full bg-zinc-950">
      <Player
        width="100%"
        height="100%"
        controls
        url="https://www.youtube.com/watch?v=Znz2QXpJTXQ"
      />
    </div>
  )
}
