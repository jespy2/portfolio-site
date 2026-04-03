#!/bin/bash
# Downloads all images from the existing jamesespy.com CRA build
# Run once from the project root: bash scripts/fetch-assets.sh

BASE="https://jamesespy.com/static/media"
OUT="src/assets"

mkdir -p "$OUT"

declare -A IMAGES=(
  ["path.jpg"]="path.1b100a6f885e02bc1e91.jpg"
  ["profile.jpg"]="profile.73289092fab5d0fd0589.jpg"
  ["bike.jpg"]="bike.04793a73674ef7277ca5.jpg"
  ["sword.jpg"]="sword.51847f579543ac1c6aaa.jpg"
  ["ride.jpg"]="ride.b9132a176f030e8a3679.jpg"
  ["hammock.jpg"]="hammock.dfa8f9b66686d7c334fd.jpg"
  ["hike.jpg"]="hike.e430a491a00c463eb95e.jpg"
  ["code.jpg"]="code.e2d6b9391c9f2a5041ce.jpg"
  ["storial.png"]="storial-screen.b643fe20e5bb56b76c83.png"
  ["gomenu.png"]="gomenu-screen.5783e11084d720aeb4a7.png"
  ["redis.png"]="redis-hawk-screen.b6d88952c924c561b886.png"
  ["river.jpg"]="river.3fadf72105d01ed259c8.jpg"
)

for LOCAL in "${!IMAGES[@]}"; do
  REMOTE="${IMAGES[$LOCAL]}"
  echo "Downloading $LOCAL..."
  curl -s -o "$OUT/$LOCAL" "$BASE/$REMOTE"
done

echo "Done. All assets in $OUT/"
