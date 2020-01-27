import uid from "uid2"

export const uidGenerator = async function(length: number) {
  uid(length, (err: Error, uid: string) => {
    console.log("Afterrrr UID() generation")
    console.log(`Random uid of size ${length} = ${uid}`)
  })
}
