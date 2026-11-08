# Lumora: ER Diagram (SDLC Phase 2, Design)

MongoDB collections: `users`, `products`, `orders`. Order items are embedded inside the order.
The cart stays in the browser (localStorage), so it has no table. Category and gender are plain fields on the product, as in products.json.

```drawio
<mxfile>
  <diagram id="DIbzD4vPA8PXQQkxoEOk" name="Page-1">
    <mxGraphModel dx="1582" dy="846" grid="1" gridSize="10" guides="1" tooltips="0" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0">
      <root>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-0" />
        <mxCell id="MHzNJYX7gvdX7IGWzACb-1" parent="MHzNJYX7gvdX7IGWzACb-0" />
        <UserObject label="" mermaidData="{&#xa;  &quot;data&quot;: &quot;erDiagram\n    USER ||--o{ ORDER : places\n    ORDER ||--|{ ORDER_ITEM : contains\n    PRODUCT ||--o{ ORDER_ITEM : \&quot;sold as\&quot;\n\n    USER {\n        ObjectId _id\n        string name\n        string email\n        string passwordHash\n        string role \&quot;customer or admin\&quot;\n        date createdAt\n    }\n    PRODUCT {\n        ObjectId _id\n        string slug\n        string name\n        string image\n        number priceCents\n        string category \&quot;Clothing, Footwear, Accessories\&quot;\n        string gender \&quot;Men, Women, Unisex\&quot;\n        number stock\n        string description\n        number ratingStars\n        number ratingCount\n    }\n    ORDER {\n        ObjectId _id\n        string orderNo \&quot;LM-1234567\&quot;\n        ObjectId user \&quot;optional, guest checkout allowed\&quot;\n        string customerName\n        string email\n        string phone\n        string address\n        string city\n        number subtotalCents\n        number shippingCents\n        number totalCents\n        string status \&quot;Pending, Processing, Shipped, Delivered, Cancelled\&quot;\n        string paymentMethod\n        string paymentStatus \&quot;Unpaid, Paid\&quot;\n        date createdAt\n    }\n    ORDER_ITEM {\n        ObjectId product\n        string name \&quot;copied at purchase time\&quot;\n        number priceCents \&quot;copied at purchase time\&quot;\n        number quantity\n    }&quot;,&#xa;  &quot;config&quot;: null&#xa;}" id="JTJsZqnvqBEJVubW7ymb-0">
          <mxCell connectable="0" parent="MHzNJYX7gvdX7IGWzACb-1" style="group;transparentBounds=1;editIcon=1;lockedGroup=0;groupPadding=10;" vertex="1">
            <mxGeometry as="geometry" />
          </mxCell>
        </UserObject>
        <UserObject label="USER" mermaidId="n:USER" mermaidBaseStyle="shape=table;startSize=43;container=1;collapsible=0;childLayout=tableLayout;fixedRows=1;rowLines=1;fontSize=16;fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;strokeWidth=1;align=center;resizeLast=1;html=1;fillColor=light-dark(#ECECFF,#1f2020);strokeColor=light-dark(#9370DB,#cccccc);fontColor=light-dark(#333333,#cccccc);" mermaidBaseValue="USER" id="MHzNJYX7gvdX7IGWzACb-2">
          <mxCell parent="JTJsZqnvqBEJVubW7ymb-0" style="shape=table;startSize=43;container=1;collapsible=0;childLayout=tableLayout;fixedRows=1;rowLines=1;fontSize=16;fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;strokeWidth=1;align=center;resizeLast=1;html=1;fillColor=light-dark(#ECECFF,#1f2020);strokeColor=light-dark(#9370DB,#cccccc);fontColor=light-dark(#333333,#cccccc);" vertex="1">
            <mxGeometry height="301" width="372" x="134" y="10" as="geometry" />
          </mxCell>
        </UserObject>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-3" parent="MHzNJYX7gvdX7IGWzACb-2" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#ffffff,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="372" y="43" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-4" parent="MHzNJYX7gvdX7IGWzACb-3" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="ObjectId" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-5" parent="MHzNJYX7gvdX7IGWzACb-3" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="_id" vertex="1">
          <mxGeometry height="43" width="125" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-6" parent="MHzNJYX7gvdX7IGWzACb-3" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="" vertex="1">
          <mxGeometry height="43" width="160" x="212" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-7" parent="MHzNJYX7gvdX7IGWzACb-2" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#F1F1FF,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="372" y="86" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-8" parent="MHzNJYX7gvdX7IGWzACb-7" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="string" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-9" parent="MHzNJYX7gvdX7IGWzACb-7" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="name" vertex="1">
          <mxGeometry height="43" width="125" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-10" parent="MHzNJYX7gvdX7IGWzACb-7" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="" vertex="1">
          <mxGeometry height="43" width="160" x="212" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-11" parent="MHzNJYX7gvdX7IGWzACb-2" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#ffffff,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="372" y="129" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-12" parent="MHzNJYX7gvdX7IGWzACb-11" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="string" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-13" parent="MHzNJYX7gvdX7IGWzACb-11" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="email" vertex="1">
          <mxGeometry height="43" width="125" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-14" parent="MHzNJYX7gvdX7IGWzACb-11" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="" vertex="1">
          <mxGeometry height="43" width="160" x="212" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-15" parent="MHzNJYX7gvdX7IGWzACb-2" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#F1F1FF,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="372" y="172" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-16" parent="MHzNJYX7gvdX7IGWzACb-15" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="string" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-17" parent="MHzNJYX7gvdX7IGWzACb-15" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="passwordHash" vertex="1">
          <mxGeometry height="43" width="125" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-18" parent="MHzNJYX7gvdX7IGWzACb-15" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="" vertex="1">
          <mxGeometry height="43" width="160" x="212" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-19" parent="MHzNJYX7gvdX7IGWzACb-2" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#ffffff,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="372" y="215" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-20" parent="MHzNJYX7gvdX7IGWzACb-19" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="string" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-21" parent="MHzNJYX7gvdX7IGWzACb-19" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="role" vertex="1">
          <mxGeometry height="43" width="125" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-22" parent="MHzNJYX7gvdX7IGWzACb-19" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="customer or admin" vertex="1">
          <mxGeometry height="43" width="160" x="212" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-23" parent="MHzNJYX7gvdX7IGWzACb-2" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#F1F1FF,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="372" y="258" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-24" parent="MHzNJYX7gvdX7IGWzACb-23" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="date" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-25" parent="MHzNJYX7gvdX7IGWzACb-23" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="createdAt" vertex="1">
          <mxGeometry height="43" width="125" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-26" parent="MHzNJYX7gvdX7IGWzACb-23" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="" vertex="1">
          <mxGeometry height="43" width="160" x="212" as="geometry" />
        </mxCell>
        <UserObject label="ORDER" mermaidId="n:ORDER" mermaidBaseStyle="shape=table;startSize=43;container=1;collapsible=0;childLayout=tableLayout;fixedRows=1;rowLines=1;fontSize=16;fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;strokeWidth=1;align=center;resizeLast=1;html=1;fillColor=light-dark(#ECECFF,#1f2020);strokeColor=light-dark(#9370DB,#cccccc);fontColor=light-dark(#333333,#cccccc);" mermaidBaseValue="ORDER" id="MHzNJYX7gvdX7IGWzACb-27">
          <mxCell parent="JTJsZqnvqBEJVubW7ymb-0" style="shape=table;startSize=43;container=1;collapsible=0;childLayout=tableLayout;fixedRows=1;rowLines=1;fontSize=16;fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;strokeWidth=1;align=center;resizeLast=1;html=1;fillColor=light-dark(#ECECFF,#1f2020);strokeColor=light-dark(#9370DB,#cccccc);fontColor=light-dark(#333333,#cccccc);" vertex="1">
            <mxGeometry height="688" width="620" x="10" y="430" as="geometry" />
          </mxCell>
        </UserObject>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-28" parent="MHzNJYX7gvdX7IGWzACb-27" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#ffffff,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="620" y="43" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-29" parent="MHzNJYX7gvdX7IGWzACb-28" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="ObjectId" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-30" parent="MHzNJYX7gvdX7IGWzACb-28" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="_id" vertex="1">
          <mxGeometry height="43" width="140" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-31" parent="MHzNJYX7gvdX7IGWzACb-28" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="" vertex="1">
          <mxGeometry height="43" width="393" x="227" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-32" parent="MHzNJYX7gvdX7IGWzACb-27" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#F1F1FF,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="620" y="86" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-33" parent="MHzNJYX7gvdX7IGWzACb-32" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="string" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-34" parent="MHzNJYX7gvdX7IGWzACb-32" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="orderNo" vertex="1">
          <mxGeometry height="43" width="140" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-35" parent="MHzNJYX7gvdX7IGWzACb-32" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="LM-1234567" vertex="1">
          <mxGeometry height="43" width="393" x="227" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-36" parent="MHzNJYX7gvdX7IGWzACb-27" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#ffffff,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="620" y="129" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-37" parent="MHzNJYX7gvdX7IGWzACb-36" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="ObjectId" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-38" parent="MHzNJYX7gvdX7IGWzACb-36" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="user" vertex="1">
          <mxGeometry height="43" width="140" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-39" parent="MHzNJYX7gvdX7IGWzACb-36" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="optional, guest checkout allowed" vertex="1">
          <mxGeometry height="43" width="393" x="227" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-40" parent="MHzNJYX7gvdX7IGWzACb-27" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#F1F1FF,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="620" y="172" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-41" parent="MHzNJYX7gvdX7IGWzACb-40" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="string" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-42" parent="MHzNJYX7gvdX7IGWzACb-40" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="customerName" vertex="1">
          <mxGeometry height="43" width="140" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-43" parent="MHzNJYX7gvdX7IGWzACb-40" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="" vertex="1">
          <mxGeometry height="43" width="393" x="227" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-44" parent="MHzNJYX7gvdX7IGWzACb-27" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#ffffff,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="620" y="215" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-45" parent="MHzNJYX7gvdX7IGWzACb-44" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="string" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-46" parent="MHzNJYX7gvdX7IGWzACb-44" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="email" vertex="1">
          <mxGeometry height="43" width="140" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-47" parent="MHzNJYX7gvdX7IGWzACb-44" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="" vertex="1">
          <mxGeometry height="43" width="393" x="227" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-48" parent="MHzNJYX7gvdX7IGWzACb-27" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#F1F1FF,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="620" y="258" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-49" parent="MHzNJYX7gvdX7IGWzACb-48" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="string" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-50" parent="MHzNJYX7gvdX7IGWzACb-48" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="phone" vertex="1">
          <mxGeometry height="43" width="140" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-51" parent="MHzNJYX7gvdX7IGWzACb-48" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="" vertex="1">
          <mxGeometry height="43" width="393" x="227" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-52" parent="MHzNJYX7gvdX7IGWzACb-27" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#ffffff,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="620" y="301" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-53" parent="MHzNJYX7gvdX7IGWzACb-52" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="string" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-54" parent="MHzNJYX7gvdX7IGWzACb-52" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="address" vertex="1">
          <mxGeometry height="43" width="140" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-55" parent="MHzNJYX7gvdX7IGWzACb-52" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="" vertex="1">
          <mxGeometry height="43" width="393" x="227" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-56" parent="MHzNJYX7gvdX7IGWzACb-27" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#F1F1FF,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="620" y="344" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-57" parent="MHzNJYX7gvdX7IGWzACb-56" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="string" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-58" parent="MHzNJYX7gvdX7IGWzACb-56" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="city" vertex="1">
          <mxGeometry height="43" width="140" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-59" parent="MHzNJYX7gvdX7IGWzACb-56" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="" vertex="1">
          <mxGeometry height="43" width="393" x="227" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-60" parent="MHzNJYX7gvdX7IGWzACb-27" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#ffffff,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="620" y="387" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-61" parent="MHzNJYX7gvdX7IGWzACb-60" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="number" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-62" parent="MHzNJYX7gvdX7IGWzACb-60" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="subtotalCents" vertex="1">
          <mxGeometry height="43" width="140" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-63" parent="MHzNJYX7gvdX7IGWzACb-60" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="" vertex="1">
          <mxGeometry height="43" width="393" x="227" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-64" parent="MHzNJYX7gvdX7IGWzACb-27" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#F1F1FF,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="620" y="430" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-65" parent="MHzNJYX7gvdX7IGWzACb-64" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="number" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-66" parent="MHzNJYX7gvdX7IGWzACb-64" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="shippingCents" vertex="1">
          <mxGeometry height="43" width="140" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-67" parent="MHzNJYX7gvdX7IGWzACb-64" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="" vertex="1">
          <mxGeometry height="43" width="393" x="227" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-68" parent="MHzNJYX7gvdX7IGWzACb-27" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#ffffff,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="620" y="473" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-69" parent="MHzNJYX7gvdX7IGWzACb-68" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="number" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-70" parent="MHzNJYX7gvdX7IGWzACb-68" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="totalCents" vertex="1">
          <mxGeometry height="43" width="140" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-71" parent="MHzNJYX7gvdX7IGWzACb-68" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="" vertex="1">
          <mxGeometry height="43" width="393" x="227" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-72" parent="MHzNJYX7gvdX7IGWzACb-27" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#F1F1FF,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="620" y="516" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-73" parent="MHzNJYX7gvdX7IGWzACb-72" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="string" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-74" parent="MHzNJYX7gvdX7IGWzACb-72" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="status" vertex="1">
          <mxGeometry height="43" width="140" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-75" parent="MHzNJYX7gvdX7IGWzACb-72" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="Pending, Processing, Shipped, Delivered, Cancelled" vertex="1">
          <mxGeometry height="43" width="393" x="227" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-76" parent="MHzNJYX7gvdX7IGWzACb-27" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#ffffff,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="620" y="559" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-77" parent="MHzNJYX7gvdX7IGWzACb-76" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="string" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-78" parent="MHzNJYX7gvdX7IGWzACb-76" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="paymentMethod" vertex="1">
          <mxGeometry height="43" width="140" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-79" parent="MHzNJYX7gvdX7IGWzACb-76" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="" vertex="1">
          <mxGeometry height="43" width="393" x="227" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-80" parent="MHzNJYX7gvdX7IGWzACb-27" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#F1F1FF,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="620" y="602" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-81" parent="MHzNJYX7gvdX7IGWzACb-80" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="string" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-82" parent="MHzNJYX7gvdX7IGWzACb-80" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="paymentStatus" vertex="1">
          <mxGeometry height="43" width="140" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-83" parent="MHzNJYX7gvdX7IGWzACb-80" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="Unpaid, Paid" vertex="1">
          <mxGeometry height="43" width="393" x="227" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-84" parent="MHzNJYX7gvdX7IGWzACb-27" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#ffffff,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="620" y="645" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-85" parent="MHzNJYX7gvdX7IGWzACb-84" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="date" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-86" parent="MHzNJYX7gvdX7IGWzACb-84" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="createdAt" vertex="1">
          <mxGeometry height="43" width="140" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-87" parent="MHzNJYX7gvdX7IGWzACb-84" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="" vertex="1">
          <mxGeometry height="43" width="393" x="227" as="geometry" />
        </mxCell>
        <UserObject label="ORDER_ITEM" mermaidId="n:ORDER_ITEM" mermaidBaseStyle="shape=table;startSize=43;container=1;collapsible=0;childLayout=tableLayout;fixedRows=1;rowLines=1;fontSize=16;fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;strokeWidth=1;align=center;resizeLast=1;html=1;fillColor=light-dark(#ECECFF,#1f2020);strokeColor=light-dark(#9370DB,#cccccc);fontColor=light-dark(#333333,#cccccc);" mermaidBaseValue="ORDER_ITEM" id="MHzNJYX7gvdX7IGWzACb-88">
          <mxCell parent="JTJsZqnvqBEJVubW7ymb-0" style="shape=table;startSize=43;container=1;collapsible=0;childLayout=tableLayout;fixedRows=1;rowLines=1;fontSize=16;fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;strokeWidth=1;align=center;resizeLast=1;html=1;fillColor=light-dark(#ECECFF,#1f2020);strokeColor=light-dark(#9370DB,#cccccc);fontColor=light-dark(#333333,#cccccc);" vertex="1">
            <mxGeometry height="215" width="387" x="433" y="1237" as="geometry" />
          </mxCell>
        </UserObject>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-89" parent="MHzNJYX7gvdX7IGWzACb-88" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#ffffff,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="387" y="43" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-90" parent="MHzNJYX7gvdX7IGWzACb-89" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="ObjectId" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-91" parent="MHzNJYX7gvdX7IGWzACb-89" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="product" vertex="1">
          <mxGeometry height="43" width="101" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-92" parent="MHzNJYX7gvdX7IGWzACb-89" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="" vertex="1">
          <mxGeometry height="43" width="199" x="188" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-93" parent="MHzNJYX7gvdX7IGWzACb-88" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#F1F1FF,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="387" y="86" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-94" parent="MHzNJYX7gvdX7IGWzACb-93" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="string" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-95" parent="MHzNJYX7gvdX7IGWzACb-93" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="name" vertex="1">
          <mxGeometry height="43" width="101" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-96" parent="MHzNJYX7gvdX7IGWzACb-93" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="copied at purchase time" vertex="1">
          <mxGeometry height="43" width="199" x="188" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-97" parent="MHzNJYX7gvdX7IGWzACb-88" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#ffffff,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="387" y="129" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-98" parent="MHzNJYX7gvdX7IGWzACb-97" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="number" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-99" parent="MHzNJYX7gvdX7IGWzACb-97" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="priceCents" vertex="1">
          <mxGeometry height="43" width="101" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-100" parent="MHzNJYX7gvdX7IGWzACb-97" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="copied at purchase time" vertex="1">
          <mxGeometry height="43" width="199" x="188" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-101" parent="MHzNJYX7gvdX7IGWzACb-88" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#F1F1FF,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="387" y="172" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-102" parent="MHzNJYX7gvdX7IGWzACb-101" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="number" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-103" parent="MHzNJYX7gvdX7IGWzACb-101" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="quantity" vertex="1">
          <mxGeometry height="43" width="101" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-104" parent="MHzNJYX7gvdX7IGWzACb-101" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="" vertex="1">
          <mxGeometry height="43" width="199" x="188" as="geometry" />
        </mxCell>
        <UserObject label="PRODUCT" mermaidId="n:PRODUCT" mermaidBaseStyle="shape=table;startSize=43;container=1;collapsible=0;childLayout=tableLayout;fixedRows=1;rowLines=1;fontSize=16;fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;strokeWidth=1;align=center;resizeLast=1;html=1;fillColor=light-dark(#ECECFF,#1f2020);strokeColor=light-dark(#9370DB,#cccccc);fontColor=light-dark(#333333,#cccccc);" mermaidBaseValue="PRODUCT" id="MHzNJYX7gvdX7IGWzACb-105">
          <mxCell parent="JTJsZqnvqBEJVubW7ymb-0" style="shape=table;startSize=43;container=1;collapsible=0;childLayout=tableLayout;fixedRows=1;rowLines=1;fontSize=16;fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;strokeWidth=1;align=center;resizeLast=1;html=1;fillColor=light-dark(#ECECFF,#1f2020);strokeColor=light-dark(#9370DB,#cccccc);fontColor=light-dark(#333333,#cccccc);" vertex="1">
            <mxGeometry height="516" width="447" x="710" y="516" as="geometry" />
          </mxCell>
        </UserObject>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-106" parent="MHzNJYX7gvdX7IGWzACb-105" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#ffffff,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="447" y="43" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-107" parent="MHzNJYX7gvdX7IGWzACb-106" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="ObjectId" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-108" parent="MHzNJYX7gvdX7IGWzACb-106" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="_id" vertex="1">
          <mxGeometry height="43" width="109" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-109" parent="MHzNJYX7gvdX7IGWzACb-106" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="" vertex="1">
          <mxGeometry height="43" width="251" x="196" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-110" parent="MHzNJYX7gvdX7IGWzACb-105" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#F1F1FF,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="447" y="86" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-111" parent="MHzNJYX7gvdX7IGWzACb-110" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="string" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-112" parent="MHzNJYX7gvdX7IGWzACb-110" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="slug" vertex="1">
          <mxGeometry height="43" width="109" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-113" parent="MHzNJYX7gvdX7IGWzACb-110" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="" vertex="1">
          <mxGeometry height="43" width="251" x="196" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-114" parent="MHzNJYX7gvdX7IGWzACb-105" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#ffffff,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="447" y="129" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-115" parent="MHzNJYX7gvdX7IGWzACb-114" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="string" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-116" parent="MHzNJYX7gvdX7IGWzACb-114" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="name" vertex="1">
          <mxGeometry height="43" width="109" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-117" parent="MHzNJYX7gvdX7IGWzACb-114" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="" vertex="1">
          <mxGeometry height="43" width="251" x="196" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-118" parent="MHzNJYX7gvdX7IGWzACb-105" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#F1F1FF,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="447" y="172" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-119" parent="MHzNJYX7gvdX7IGWzACb-118" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="string" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-120" parent="MHzNJYX7gvdX7IGWzACb-118" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="image" vertex="1">
          <mxGeometry height="43" width="109" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-121" parent="MHzNJYX7gvdX7IGWzACb-118" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="" vertex="1">
          <mxGeometry height="43" width="251" x="196" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-122" parent="MHzNJYX7gvdX7IGWzACb-105" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#ffffff,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="447" y="215" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-123" parent="MHzNJYX7gvdX7IGWzACb-122" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="number" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-124" parent="MHzNJYX7gvdX7IGWzACb-122" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="priceCents" vertex="1">
          <mxGeometry height="43" width="109" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-125" parent="MHzNJYX7gvdX7IGWzACb-122" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="" vertex="1">
          <mxGeometry height="43" width="251" x="196" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-126" parent="MHzNJYX7gvdX7IGWzACb-105" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#F1F1FF,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="447" y="258" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-127" parent="MHzNJYX7gvdX7IGWzACb-126" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="string" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-128" parent="MHzNJYX7gvdX7IGWzACb-126" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="category" vertex="1">
          <mxGeometry height="43" width="109" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-129" parent="MHzNJYX7gvdX7IGWzACb-126" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="Clothing, Footwear, Accessories" vertex="1">
          <mxGeometry height="43" width="251" x="196" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-130" parent="MHzNJYX7gvdX7IGWzACb-105" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#ffffff,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="447" y="301" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-131" parent="MHzNJYX7gvdX7IGWzACb-130" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="string" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-132" parent="MHzNJYX7gvdX7IGWzACb-130" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="gender" vertex="1">
          <mxGeometry height="43" width="109" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-133" parent="MHzNJYX7gvdX7IGWzACb-130" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="Men, Women, Unisex" vertex="1">
          <mxGeometry height="43" width="251" x="196" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-134" parent="MHzNJYX7gvdX7IGWzACb-105" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#F1F1FF,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="447" y="344" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-135" parent="MHzNJYX7gvdX7IGWzACb-134" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="number" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-136" parent="MHzNJYX7gvdX7IGWzACb-134" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="stock" vertex="1">
          <mxGeometry height="43" width="109" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-137" parent="MHzNJYX7gvdX7IGWzACb-134" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="" vertex="1">
          <mxGeometry height="43" width="251" x="196" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-138" parent="MHzNJYX7gvdX7IGWzACb-105" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#ffffff,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="447" y="387" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-139" parent="MHzNJYX7gvdX7IGWzACb-138" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="string" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-140" parent="MHzNJYX7gvdX7IGWzACb-138" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="description" vertex="1">
          <mxGeometry height="43" width="109" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-141" parent="MHzNJYX7gvdX7IGWzACb-138" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="" vertex="1">
          <mxGeometry height="43" width="251" x="196" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-142" parent="MHzNJYX7gvdX7IGWzACb-105" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#F1F1FF,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="447" y="430" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-143" parent="MHzNJYX7gvdX7IGWzACb-142" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="number" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-144" parent="MHzNJYX7gvdX7IGWzACb-142" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="ratingStars" vertex="1">
          <mxGeometry height="43" width="109" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-145" parent="MHzNJYX7gvdX7IGWzACb-142" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="" vertex="1">
          <mxGeometry height="43" width="251" x="196" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-146" parent="MHzNJYX7gvdX7IGWzACb-105" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=1;fillColor=light-dark(#ffffff,#1f2020);strokeColor=inherit;strokeWidth=1;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=0;" vertex="1">
          <mxGeometry height="43" width="447" y="473" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-147" parent="MHzNJYX7gvdX7IGWzACb-146" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="number" vertex="1">
          <mxGeometry height="43" width="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-148" parent="MHzNJYX7gvdX7IGWzACb-146" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="ratingCount" vertex="1">
          <mxGeometry height="43" width="109" x="87" as="geometry" />
        </mxCell>
        <mxCell id="MHzNJYX7gvdX7IGWzACb-149" parent="MHzNJYX7gvdX7IGWzACb-146" style="shape=partialRectangle;connectable=0;fillColor=none;strokeColor=light-dark(#9370DB,#cccccc);strokeWidth=1;fontColor=light-dark(#333333,#cccccc);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;top=1;left=1;bottom=1;right=1;align=left;spacingLeft=8;overflow=hidden;fontSize=16;" value="" vertex="1">
          <mxGeometry height="43" width="251" x="196" as="geometry" />
        </mxCell>
        <UserObject label="places" mermaidId="e:USER-&gt;ORDER#0" mermaidBaseStyle="curved=1;startArrow=ERmandOne;startSize=14;endArrow=ERzeroToMany;endSize=14;strokeColor=light-dark(#333333,#cccccc);strokeWidth=1;html=1;fontSize=14;labelBackgroundColor=light-dark(#F8FFEC4D,#2a2a2a4D);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;fontColor=light-dark(#333333,#cccccc);exitX=0.5;exitY=1;entryX=0.5;entryY=0;" mermaidBaseValue="places" id="MHzNJYX7gvdX7IGWzACb-150">
          <mxCell edge="1" parent="JTJsZqnvqBEJVubW7ymb-0" source="MHzNJYX7gvdX7IGWzACb-2" style="curved=1;startArrow=ERmandOne;startSize=14;endArrow=ERzeroToMany;endSize=14;strokeColor=light-dark(#333333,#cccccc);strokeWidth=1;html=1;fontSize=14;labelBackgroundColor=light-dark(#F8FFEC4D,#2a2a2a4D);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;fontColor=light-dark(#333333,#cccccc);exitX=0.5;exitY=1;entryX=0.5;entryY=0;" target="MHzNJYX7gvdX7IGWzACb-27">
            <mxGeometry relative="1" as="geometry" />
          </mxCell>
        </UserObject>
        <UserObject label="contains" mermaidId="e:ORDER-&gt;ORDER_ITEM#0" mermaidBaseStyle="curved=1;startArrow=ERmandOne;startSize=14;endArrow=ERoneToMany;endSize=14;strokeColor=light-dark(#333333,#cccccc);strokeWidth=1;html=1;fontSize=14;labelBackgroundColor=light-dark(#F8FFEC4D,#2a2a2a4D);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;fontColor=light-dark(#333333,#cccccc);exitX=0.5;exitY=1;entryX=0.16;entryY=0;" mermaidBaseValue="contains" id="MHzNJYX7gvdX7IGWzACb-151">
          <mxCell edge="1" parent="JTJsZqnvqBEJVubW7ymb-0" source="MHzNJYX7gvdX7IGWzACb-27" style="curved=1;startArrow=ERmandOne;startSize=14;endArrow=ERoneToMany;endSize=14;strokeColor=light-dark(#333333,#cccccc);strokeWidth=1;html=1;fontSize=14;labelBackgroundColor=light-dark(#F8FFEC4D,#2a2a2a4D);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;fontColor=light-dark(#333333,#cccccc);exitX=0.5;exitY=1;entryX=0.16;entryY=0;" target="MHzNJYX7gvdX7IGWzACb-88">
            <mxGeometry relative="1" as="geometry">
              <Array as="points">
                <mxPoint x="320" y="1178" />
              </Array>
            </mxGeometry>
          </mxCell>
        </UserObject>
        <UserObject label="sold as" mermaidId="e:PRODUCT-&gt;ORDER_ITEM#0" mermaidBaseStyle="curved=1;startArrow=ERmandOne;startSize=14;endArrow=ERzeroToMany;endSize=14;strokeColor=light-dark(#333333,#cccccc);strokeWidth=1;html=1;fontSize=14;labelBackgroundColor=light-dark(#F8FFEC4D,#2a2a2a4D);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;fontColor=light-dark(#333333,#cccccc);exitX=0.5;exitY=1;entryX=0.84;entryY=0;" mermaidBaseValue="sold as" id="MHzNJYX7gvdX7IGWzACb-152">
          <mxCell edge="1" parent="JTJsZqnvqBEJVubW7ymb-0" source="MHzNJYX7gvdX7IGWzACb-105" style="curved=1;startArrow=ERmandOne;startSize=14;endArrow=ERzeroToMany;endSize=14;strokeColor=light-dark(#333333,#cccccc);strokeWidth=1;html=1;fontSize=14;labelBackgroundColor=light-dark(#F8FFEC4D,#2a2a2a4D);fontFamily=Trebuchet MS,Verdana,Arial,sans-serif;fontColor=light-dark(#333333,#cccccc);exitX=0.5;exitY=1;entryX=0.84;entryY=0;" target="MHzNJYX7gvdX7IGWzACb-88">
            <mxGeometry relative="1" as="geometry">
              <Array as="points">
                <mxPoint x="934" y="1135" />
              </Array>
            </mxGeometry>
          </mxCell>
        </UserObject>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>

```
