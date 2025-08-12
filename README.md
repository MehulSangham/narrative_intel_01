# Data Dashboard Components

A React TypeScript project showcasing time series chart components generated from Figma designs using AI-powered design-to-code workflow.

## 🎨 Design-to-Code Workflow

This project demonstrates the complete bidirectional workflow between Figma and code:

1. **Design in Figma**: Created professional time series charts with proper styling, axes, grid lines, and data visualization
2. **Extract Design Data**: Used Figma MCP integration to read design specifications (colors, dimensions, typography)
3. **Generate React Code**: Automatically converted Figma designs into production-ready React TypeScript components

## ✨ Features

- **TimeSeriesChart Component**: Professional data visualization component
- **Configurable**: Customizable title, data, dimensions
- **Responsive**: SVG-based charts that scale properly
- **TypeScript**: Full type safety with proper interfaces
- **Modern Styling**: Matches Figma design specifications exactly

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Usage

```tsx
import TimeSeriesChart from './TimeSeriesChart';

const data = [
  { month: "Jan", value: 250000 },
  { month: "Mar", value: 480000 },
  { month: "May", value: 620000 },
  { month: "Jul", value: 850000 }
];

<TimeSeriesChart 
  title="Revenue Growth Over Time"
  data={data}
  width={600}
  height={400}
/>
```

## 🎯 Component API

### TimeSeriesChart Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | "Revenue Growth Over Time" | Chart title |
| `data` | `DataPoint[]` | Sample revenue data | Array of data points |
| `width` | `number` | 600 | Chart width in pixels |
| `height` | `number` | 400 | Chart height in pixels |

### DataPoint Interface

```tsx
interface DataPoint {
  month: string;
  value: number;
}
```

## 🎨 Design Specifications

The component matches the exact Figma design specifications:

- **Container**: `#fafafc` background, `#e5e5eb` border, 12px border radius
- **Typography**: Inter font family, 20px title, 12px labels
- **Data Line**: `#3399ff` color, 3px stroke width
- **Grid Lines**: `#e6e6e6` color for subtle visual guides
- **Axes**: `#b3b3b3` color for clean separation

## 🛠 Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking

### Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **SVG** - Scalable vector graphics for charts

## 🔗 Integration

This project demonstrates the power of combining:

- **Figma** for professional design
- **Cursor** for AI-powered development
- **MCP (Model Context Protocol)** for tool integration
- **WebSocket** for real-time communication

## 📊 Example Data

The component comes with sample data showing:

- Revenue growth from $250K to $850K over 7 months
- User growth from 12K to 42K users
- Performance metrics visualization

## 🎯 Future Enhancements

- Interactive tooltips on hover
- Multiple data series support
- Animation transitions
- Export to PNG/SVG functionality
- Theme customization
- Mobile responsive breakpoints

---

✨ **Generated from Figma designs using AI-powered design-to-code workflow**

Created with Cursor + Figma MCP integration 