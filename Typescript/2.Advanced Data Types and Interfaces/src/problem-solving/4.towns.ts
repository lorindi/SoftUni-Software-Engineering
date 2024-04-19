function town(list: string[]): void {
  for (let line of list) {
    let [town, latitude, longitude] = line.split(" | ");
    console.log({
      town,
      latitude: Number(latitude).toFixed(2),
      longitude: Number(longitude).toFixed(2),
    });
  }
}
town(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
