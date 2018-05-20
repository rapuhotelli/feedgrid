# Components

## FeedGrid
contains all blocks

## Block
A container / "category" of a one type of feed
props:
- type (string) (youtube, hn, etc)
  - select classNames by type
- data (array|object)

type prop decides colors and which list item component is used for data

## Items
### YoutubeListItem
props:
- items (array) list of items to show

### HNListItem
props:
- items (array) list of items to show

