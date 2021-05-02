import React from "react";
import styles from "./UserStatsGraphs.module.css";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

const UserStatsGraphs = ({ data }) => {
  const [total, setTotal] = React.useState(0);
  const [graph, setGraph] = React.useState([]);

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return { x: item.title, y: Number(item.accesses) };
    });
    setGraph(graphData);
    setTotal(
      data.map(({ accesses }) => Number(accesses)).reduce((a, b) => a + b)
    );
  }, [data]);
  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.graphItem} ${styles.total}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={styles.graphItem}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, right: 80, left: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>
      <div className={styles.graphItem}>
        <VictoryChart >
          <VictoryBar alignment="start" data={graph} />
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserStatsGraphs;