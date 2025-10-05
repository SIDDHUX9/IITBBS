import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const data = [
  { month: "Jan", performance: 65, growth: 45 },
  { month: "Feb", performance: 75, growth: 52 },
  { month: "Mar", performance: 85, growth: 61 },
  { month: "Apr", performance: 78, growth: 58 },
  { month: "May", performance: 90, growth: 72 },
  { month: "Jun", performance: 95, growth: 85 },
  { month: "Jul", performance: 88, growth: 78 },
  { month: "Aug", performance: 92, growth: 88 },
  { month: "Sep", performance: 97, growth: 95 },
];

export const DataGraph = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
            Quantum Analytics
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time performance metrics visualizing exponential growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Performance Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              System Performance
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorPerformance" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(265, 100%, 65%)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(265, 100%, 65%)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(250, 50%, 20%)" />
                <XAxis dataKey="month" stroke="hsl(200, 30%, 70%)" />
                <YAxis stroke="hsl(200, 30%, 70%)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(250, 80%, 8%)",
                    border: "1px solid hsl(250, 50%, 20%)",
                    borderRadius: "0.5rem",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="performance"
                  stroke="hsl(265, 100%, 65%)"
                  strokeWidth={3}
                  fill="url(#colorPerformance)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Growth Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Revenue Growth
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(250, 50%, 20%)" />
                <XAxis dataKey="month" stroke="hsl(200, 30%, 70%)" />
                <YAxis stroke="hsl(200, 30%, 70%)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(250, 80%, 8%)",
                    border: "1px solid hsl(250, 50%, 20%)",
                    borderRadius: "0.5rem",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="growth"
                  stroke="hsl(190, 100%, 55%)"
                  strokeWidth={3}
                  dot={{ fill: "hsl(190, 100%, 55%)", r: 6 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mt-8"
        >
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">+342%</div>
            <div className="text-sm text-muted-foreground">Growth Rate</div>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-secondary mb-2">1.2M</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">50ms</div>
            <div className="text-sm text-muted-foreground">Latency</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
