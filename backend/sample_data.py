#!/usr/bin/env python
"""
Script to add sample blog posts to the database.
Run this after setting up the Django backend.
"""

import os
import sys
import django
from django.utils import timezone
from datetime import timedelta

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_backend.settings')
django.setup()

from api.models import Blog

def create_sample_blogs():
    """Create sample blog posts for the portfolio."""
    
    sample_blogs = [
        {
            'title': 'Building Interactive Web Experiences with React and Framer Motion',
            'content': '''
            In this post, I'll share my journey of creating interactive web experiences using React and Framer Motion. 
            We'll explore how to build smooth animations, micro-interactions, and engaging user interfaces that delight users.
            
            ## Why Framer Motion?
            
            Framer Motion provides an intuitive API for creating complex animations in React. It handles the complexities 
            of animation timing, easing, and state management, allowing developers to focus on creating beautiful experiences.
            
            ## Key Concepts
            
            1. **Motion Components**: Pre-built animated versions of HTML elements
            2. **Variants**: Reusable animation states
            3. **Gestures**: Touch and mouse interactions
            4. **Layout Animations**: Automatic animations when layout changes
            
            ## Example: Animated Card Component
            
            ```jsx
            import { motion } from 'framer-motion';
            
            const AnimatedCard = ({ children }) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {children}
              </motion.div>
            );
            ```
            
            This simple example demonstrates how easy it is to add engaging interactions to your components.
            
            ## Best Practices
            
            - Keep animations subtle and purposeful
            - Use consistent timing and easing
            - Consider accessibility and reduced motion preferences
            - Test on various devices and connection speeds
            
            The key to great web experiences is finding the right balance between functionality and delight.
            ''',
            'excerpt': 'Learn how to create engaging web experiences using React and Framer Motion. From basic animations to complex interactions, discover the tools and techniques that make websites come alive.',
            'created_at': timezone.now() - timedelta(days=5)
        },
        {
            'title': 'Django REST Framework: Building Robust APIs for Modern Applications',
            'content': '''
            Django REST Framework (DRF) is a powerful toolkit for building Web APIs. In this comprehensive guide, 
            I'll walk you through building a robust API that can handle real-world requirements.
            
            ## Why Django REST Framework?
            
            DRF provides a comprehensive set of tools for building APIs:
            - Serialization for complex data types
            - Authentication and permissions
            - Browsable API interface
            - Extensive documentation
            
            ## Setting Up Your First API
            
            Let's start with a simple example:
            
            ```python
            from rest_framework import serializers, viewsets
            from .models import Blog
            
            class BlogSerializer(serializers.ModelSerializer):
                class Meta:
                    model = Blog
                    fields = ['id', 'title', 'content', 'created_at']
            
            class BlogViewSet(viewsets.ReadOnlyModelViewSet):
                queryset = Blog.objects.all()
                serializer_class = BlogSerializer
            ```
            
            ## Advanced Features
            
            ### Authentication
            DRF supports various authentication methods including token-based, session-based, and OAuth.
            
            ### Permissions
            Fine-grained control over who can access what data.
            
            ### Pagination
            Handle large datasets efficiently with built-in pagination.
            
            ### Filtering and Search
            Powerful filtering capabilities for complex queries.
            
            ## Best Practices
            
            1. **Use ViewSets**: Reduce boilerplate code
            2. **Implement Proper Serialization**: Handle complex data relationships
            3. **Add Authentication**: Secure your endpoints
            4. **Document Your API**: Use DRF's built-in documentation
            5. **Test Thoroughly**: Write comprehensive tests
            
            Building APIs with DRF is both powerful and enjoyable, providing the tools you need to create robust, 
            scalable web services.
            ''',
            'excerpt': 'A comprehensive guide to building robust APIs with Django REST Framework. Learn about serialization, authentication, permissions, and best practices for creating scalable web services.',
            'created_at': timezone.now() - timedelta(days=10)
        },
        {
            'title': 'The Art of Responsive Design: Creating Beautiful Websites for All Devices',
            'content': '''
            Responsive design is no longer optional—it's essential. With users accessing websites from devices 
            ranging from smartphones to large desktop monitors, creating a consistent experience across all 
            screen sizes is crucial.
            
            ## The Mobile-First Approach
            
            Start with mobile designs and progressively enhance for larger screens. This approach ensures 
            that your core functionality works on all devices.
            
            ## CSS Grid and Flexbox
            
            Modern CSS provides powerful tools for creating flexible layouts:
            
            ```css
            .container {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
            }
            
            .card {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            ```
            
            ## Breakpoints and Media Queries
            
            Define breakpoints based on content, not specific devices:
            
            ```css
            /* Mobile first */
            .component { /* mobile styles */ }
            
            /* Tablet */
            @media (min-width: 768px) {
              .component { /* tablet styles */ }
            }
            
            /* Desktop */
            @media (min-width: 1024px) {
              .component { /* desktop styles */ }
            }
            ```
            
            ## Performance Considerations
            
            - Optimize images for different screen sizes
            - Use appropriate font sizes and line heights
            - Consider touch targets for mobile devices
            - Test on real devices, not just browser dev tools
            
            ## Testing Your Responsive Design
            
            1. **Browser Dev Tools**: Test various screen sizes
            2. **Real Devices**: Test on actual phones and tablets
            3. **Performance Testing**: Ensure fast loading on mobile networks
            4. **Accessibility Testing**: Ensure usability for all users
            
            Responsive design is about creating experiences that work beautifully regardless of how users 
            choose to access your content.
            ''',
            'excerpt': 'Master the art of responsive design with modern CSS techniques. Learn about mobile-first approaches, CSS Grid, Flexbox, and creating beautiful experiences across all devices.',
            'created_at': timezone.now() - timedelta(days=15)
        }
    ]
    
    for blog_data in sample_blogs:
        blog, created = Blog.objects.get_or_create(
            title=blog_data['title'],
            defaults={
                'content': blog_data['content'],
                'excerpt': blog_data['excerpt'],
                'created_at': blog_data['created_at'],
                'is_published': True
            }
        )
        
        if created:
            print(f"Created blog post: {blog.title}")
        else:
            print(f"Blog post already exists: {blog.title}")

if __name__ == '__main__':
    print("Creating sample blog posts...")
    create_sample_blogs()
    print("Sample blog posts created successfully!")
