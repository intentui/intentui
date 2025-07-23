import { Collection, TreeLoadMoreItem, type TreeLoadMoreItemProps } from "react-aria-components"
import { useAsyncList } from "react-stately"
import { ProgressCircle } from "@/components/ui/progress-circle"
import { TreeItem as PrimitiveItem, Tree, TreeContent } from "@/components/ui/tree"

interface StarWarsCharacter {
  name: string
  height: number
  mass: number
  birth_year: number
}

interface Pokemon {
  name: string
}

export default function TreeInfiniteScrollDemo() {
  const starWarsList = useAsyncList<StarWarsCharacter>({
    async load({ signal, cursor }) {
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, "https://")
      }

      const res = await fetch(cursor || "https://swapi.py4e.com/api/people/?search=", { signal })
      const json = await res.json()

      return {
        items: json.results,
        cursor: json.next,
      }
    },
  })

  const pokemonList = useAsyncList<Pokemon>({
    async load({ signal, cursor }) {
      const res = await fetch(cursor || `https://pokeapi.co/api/v2/pokemon`, { signal })
      const json = await res.json()

      return {
        items: json.results,
        cursor: json.next,
      }
    },
  })

  return (
    <Tree aria-label="async loading tree" className="h-56 min-w-56 rounded-lg border p-2">
      <TreeItem id="pokemon" title="Pokemon">
        <Collection items={pokemonList.items}>
          {(item: Pokemon) => <TreeItem id={item.name} title={item.name} />}
        </Collection>
        <TreeLoader isLoading={pokemonList.isLoading} onLoadMore={pokemonList.loadMore} />
      </TreeItem>
      <TreeItem id="starwars" title="Star Wars">
        <Collection items={starWarsList.items}>
          {(item: StarWarsCharacter) => <TreeItem id={item.name} title={item.name} />}
        </Collection>
        <TreeLoader isLoading={starWarsList.isLoading} onLoadMore={starWarsList.loadMore} />
      </TreeItem>
    </Tree>
  )
}

interface TreeItemProps {
  id: string
  title: string
  children?: React.ReactNode
}

function TreeItem({ id, title, children }: TreeItemProps) {
  return (
    <PrimitiveItem id={id} textValue={title}>
      <TreeContent>{title}</TreeContent>
      {children}
    </PrimitiveItem>
  )
}

const TreeLoader = ({ className, ...props }: TreeLoadMoreItemProps) => {
  return (
    <TreeLoadMoreItem {...props}>
      {({ level }) => {
        return (
          <ProgressCircle
            style={{
              marginLeft: `${level * 16}px`,
              marginBottom: "8px",
              marginTop: "8px",
            }}
            aria-label="Loading more..."
            isIndeterminate
          />
        )
      }}
    </TreeLoadMoreItem>
  )
}
