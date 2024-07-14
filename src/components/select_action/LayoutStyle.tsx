import React, { useState } from "react";
import { Button, Row, Col } from "antd";
import "./LayoutStyle.scss";

const Layoutstyle = (props:any) => {
    const { t } = props
      const initialShapes: string[] = [
            "square", "circle", "oval",
            "trapezoid", "rectangle", "parallelogram"
        ];
      const [shapes, setShapes] = useState<string[]>(initialShapes);
    
      const shuffleShapes = () => {
        setShapes(prevShapes => {
          const newShapes = [...prevShapes];
          for (let i = newShapes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newShapes[i], newShapes[j]] = [newShapes[j], newShapes[i]];
          }
          return newShapes;
        });
      };

      const handleShapeClick = () => {
        shuffleShapes();
      };
    
    
      const moveLeft = () => {
        setShapes(prevShapes => {
          const newShapes = [...prevShapes];
          const first = newShapes.shift()!;
          newShapes.push(first);
          return newShapes;
        });
      };
    
      const moveRight = () => {
        setShapes(prevShapes => {
          const newShapes = [...prevShapes];
          const last = newShapes.pop()!;
          newShapes.unshift(last);
          return newShapes;
        });
      };
    
      const switchRows = () => {
        setShapes(prevShapes => {
          const newShapes = [...prevShapes];
          const firstRow = newShapes.slice(0, 3);
          const secondRow = newShapes.slice(3);
          return [...secondRow, ...firstRow];
        });
      };
    
      const renderShape = (shape: string) => (
        <Col span={8}  key={shape}>
             <div className="shape-container" onClick={handleShapeClick}>
                <div className={`shape ${shape}`}>
                </div>
             </div>
          
        </Col>
      );
    
      return (
        <div>
          <Row gutter={[16, 16]}>
            {shapes.slice(0, 3).map(renderShape)}
          </Row>
          <Row gutter={[16, 16]}>
            {shapes.slice(3).map(renderShape)}
          </Row>
          <div style={{ marginTop: 20 ,display:'flex',justifyContent:'center'}}>
            <Button onClick={moveLeft} style={{ marginRight: 8 }}>{t('shape.moveR')}</Button>
            <Button onClick={moveRight} style={{ marginRight: 8 }}>{t('shape.moveL')}</Button>
            <Button onClick={switchRows}>{t('shape.swap')}</Button>
          </div>
        </div>
      );
};

export default Layoutstyle;